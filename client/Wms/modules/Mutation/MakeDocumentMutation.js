import Relay from 'react-relay';

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

    this.props.doc.content.forEach((entry) => {
      const matchedProduct = updatedProducts.find(
        product => product.name === entry.name
      );

      if (matchedProduct) {
        switch (this.props.doc.act) {
          case 'arrival':
            matchedProduct.quantity += entry.quantity;
            break;
          case 'dispatch':
            matchedProduct.quantity -= entry.quantity;
            break;
          case 'inventory':
            matchedProduct.quantity = entry.quantity;
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

export default MakeDocumentMutation;

