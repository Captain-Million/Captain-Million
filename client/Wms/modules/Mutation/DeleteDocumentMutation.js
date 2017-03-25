import Relay from 'react-relay';

// eslint-disable class-methods-use-this
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

    doc.content.forEach((entry) => {
      const matchedProduct = updatedProducts.find(
        product => product.name === entry.name
      );

      if (matchedProduct) {
        switch (doc.act) {
          case 'arrival':
            matchedProduct.quantity -= entry.quantity;
            break;
          case 'dispatch':
            matchedProduct.quantity += entry.quantity;
            break;
          case 'inventory':
            break;
          default:
            matchedProduct.quantity = 0;
        }
      }
    });

    return {
      inventory: {
        id: this.props.inventory.id,
        products: updatedProducts,
      },
    };
  }
}

export default DeleteDocumentMutation;

