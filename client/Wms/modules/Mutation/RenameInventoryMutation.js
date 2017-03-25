import Relay from 'react-relay';

class RenameInventoryMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { renameInventory }`;
  }

  getVariables() {
    return {
      inventoryID: this.props.inventory.id,
      inventoryName: this.props.name,
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
          name
        }
      }
    `;
  }

  getOptimisticResponse() {
    return {
      inventory: {
        id: this.props.inventory.id,
        name: this.props.name,
      },
    };
  }
}

export default RenameInventoryMutation;

