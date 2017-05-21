import Relay from 'react-relay/classic';
import computeProductList from '../../../../server/controllers/compute-product-list';

/* eslint-disable class-methods-use-this */
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class DeleteDocumentMutation extends Relay.Mutation {
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
          content {
            name
            quantity
          }
          act
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { deleteDocument }`;
  }

  getVariables() {
    return { documentID: this.props.documentID };
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
    const doc = {
      ...this.props.inventory.documents.find(
        d => d.id === this.props.documentID
      ),
    };

    if (!doc) return {};

    const updatedProducts = this.props.inventory.products.map(
        product => ({ ...product })
    );
    const remainingDocuments = this.props.inventory.documents.filter(
      d => d.id !== this.props.documentID
    );

    computeProductList({
      products: updatedProducts,
      documents: remainingDocuments,
    }, doc);

    return {
      inventory: {
        id: this.props.inventory.id,
        products: updatedProducts,
        documents: remainingDocuments,
      },
    };
  }
}

export default DeleteDocumentMutation;

