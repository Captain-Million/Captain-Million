import Relay from 'react-relay';

/* eslint-disable class-methods-use-this */
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class UpdateOwnersMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { updateOwners }`;
  }

  getVariables() {
    return {
      inventoryID: this.props.inventory.id,
      owners: this.props.owners,
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
          owners
        }
      }
    `;
  }
}

export default UpdateOwnersMutation;

