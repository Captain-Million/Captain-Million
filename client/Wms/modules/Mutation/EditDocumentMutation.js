import Relay from 'react-relay';
import computeProductList from '../../../../server/controllers/compute-product-list';

// eslint-disable class-methods-use-this
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class EditDocumentMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
        products {
          name
          quantity
        }
        documents {
          id
          act
          content {
            name
            quantity
          }
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { editDocument }`;
  }

  getVariables() {
    const transformedDoc = {
      act: this.props.doc.act,
      _id: this.props.doc.id,
      content: this.props.doc.content.map(entry => ({
        name: entry.name,
        quantity: entry.quantity,
      })),
    };

    return { doc: transformedDoc };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on InventoryPayload {
        inventory {
          documents 
          products
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        inventory: this.props.inventory.id,
      },
    }];
  }

  getOptimisticResponse() {
    const updatedProducts = this.props.inventory.products.map(
        product => ({ ...product })
    );
    const remainingDocuments = this.props.inventory.documents.slice();
    const editIndex = remainingDocuments.findIndex(
      doc => doc.id === this.props.doc.id
    );
    remainingDocuments.splice(editIndex, 1, this.props.doc);

    computeProductList({
      products: updatedProducts,
      documents: remainingDocuments,
    });

    return {
      inventory: {
        id: this.props.inventory.id,
        products: updatedProducts,
        documents: remainingDocuments,
      },
    };
  }
}

export default EditDocumentMutation;

