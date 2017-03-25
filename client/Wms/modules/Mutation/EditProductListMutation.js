import Relay from 'react-relay';

class EditProductListMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { editProductList }`;
  }

  getVariables() {
    return {
      inventoryID: this.props.inventoryID,
      editedProductNames: this.props.editedProductNames,
    };
  }

  getConfigs() {
    // TODO
    return [];
  }

  getFatQuery() {
    // TODO
    return Relay.QL`
      fragment on InventoryPayload {
        inventory {
          documents {
            _id,
            act,
            content {
              name,
              quantity,
            },
          },
          products {
            name
          }
        }
      }
    `;
  }
};

export default EditProductListMutation;

