import Relay from 'react-relay';

// eslint-disable class-methods-use-this
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class EditProductMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
        products {
          name
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { editProduct }`;
  }

  getVariables() {
    return {
      productName: this.props.productName,
      inventoryID: this.props.inventory.id,
      updates: this.props.updates,
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
    const updatedProducts = this.props.inventory.products
      .map(product => ({ ...product }));

    updatedProducts
      .filter(product => product.name === this.props.productName)
      .forEach((product) => {
        if (this.props.updates.name) {
          product.name = this.props.updates.name;
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

export default EditProductMutation;

