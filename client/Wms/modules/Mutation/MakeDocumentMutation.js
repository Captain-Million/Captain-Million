import Relay from 'react-relay';
import computeProductList from '../../../../server/controllers/compute-product-list';

// eslint-disable class-methods-use-this
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class MakeDocumentMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
        products {
          name
          quantity
        }
        documents {
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
    return Relay.QL`mutation { makeDocument }`;
  }

  getVariables() {
    return {
      doc: this.props.doc,
      inventoryID: this.props.inventory.id,
    };
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        inventory: this.props.inventory.id,
      },
    }];
  }

  getFatQuery() {
    return Relay.QL`
      fragment on InventoryPayload {
        inventory {
          products
          documents
        }
      }
    `;
  }

  getOptimisticResponse() {
    const updatedProducts = this.props.inventory.products.map(
      product => ({ ...product })
    );
    const updatedDocuments = this.props.inventory.documents.concat([
      this.props.doc,
    ]);

    computeProductList({
      products: updatedProducts,
      documents: updatedDocuments,
    }, this.props.doc, true);

    return {
      inventory: {
        id: this.props.inventory.id,
        products: updatedProducts,
        documents: updatedDocuments,
      },
    };
  }
}

export default MakeDocumentMutation;

