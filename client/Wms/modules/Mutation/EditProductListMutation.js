import Relay from 'react-relay/classic';

/* eslint-disable class-methods-use-this */
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class EditProductListMutation extends Relay.Mutation {
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
    return Relay.QL`mutation { editProductList }`;
  }

  getVariables() {
    const trimmed = this.props.editedProductNames.map(n => n.trim());

    return {
      inventoryID: this.props.inventory.id,
      editedProductNames: trimmed,
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
          documents
          products
        }
      }
    `;
  }

  getOptimisticResponse() {
    const trimmed = this.props.editedProductNames.map(n => n.trim());
    const updatedProducts = this.props.inventory.products
      .map(product => ({ ...product }))
      .filter(prod => trimmed.includes(prod.name));

    const existingNames = updatedProducts.map(p => p.name);
    trimmed.filter(name => !existingNames.includes(name))
      .forEach(name => updatedProducts.push({ name, quantity: 0 }));

    return {
      inventory: {
        products: updatedProducts,
      },
    };
  }
}

export default EditProductListMutation;

