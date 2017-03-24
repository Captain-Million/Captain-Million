import Relay from 'react-relay';

class EditProductMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { editProduct }`;
  }

  getVariables() {
    return {
      productName: this.props.productName,
      inventoryID: this.props.inventoryID,
      updates: this.props.updates,
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
          products { name },
          documents { content { name } },
        }
      }
    `;
  }
}

export default EditProductMutation;

