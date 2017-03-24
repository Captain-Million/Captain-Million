import Relay from 'react-relay';

class MakeDocumentMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { makeDocument }`;
  }

  getVariables() {
    return {
      doc: this.props.doc,
      inventoryID: this.props.inventoryID,
    }
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

export default MakeDocumentMutation;

