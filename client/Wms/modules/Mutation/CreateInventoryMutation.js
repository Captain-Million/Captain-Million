import Relay from 'react-relay';

class CreateInventoryMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { createInventory }`;
  }

  getVariables() {
    return {};
  }

  getFatQuery() {
    // TODO
    return Relay.QL`
      fragment on Inventory {
        _id,
        creator {
          name,
          _id,
        },
        owners {
          name,
          _id,
        },
        products {
          _id,
        },
        documents {
          _id,
        }
      }
    `;
  }

  getConfigs() {
    // TODO
    return [];
  }
};

export default CreateInventoryMutation;

