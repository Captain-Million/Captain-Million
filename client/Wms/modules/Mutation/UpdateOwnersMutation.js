import Relay from 'react-relay';

class UpdateOwnersMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { updateOwners }`;
  }

  getVariables() {
    return {
      inventoryID: this.props.inventoryID,
      owners: this.props.owners,
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
          _id
        }
      }
    `;
  }
};

export default UpdateOwnersMutation;

