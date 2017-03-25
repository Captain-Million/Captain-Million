import Relay from 'react-relay';

// eslint-disable class-methods-use-this
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class CreateInventoryMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { createInventory }`;
  }

  getVariables() {
    return {};
  }

  getFatQuery() {
    return Relay.QL`
      fragment on Inventory {
        id
        creator
        owners
        products
        documents
      }
    `;
  }

  getConfigs() {
    // FIXME
    // use 'REQUIRED_CHILDREN' to fetch the new inventory and
    // set up a onSuccess handler to do something with the data
    //
    // not sure what to do at this moment before UI supports multiple
    // inventories per user
    return [];
  }
}

export default CreateInventoryMutation;

