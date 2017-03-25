import Relay from 'react-relay';

class DeleteDocumentMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { deleteDocument }`;
  }

  getVariables() {
    return { documentID: this.props.doc._id };
  }

  getFatQuery() {
    // TODO
    return Relay.QL`
      fragment on Inventory {
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

  static fragments = {
    // TODO
    doc: () => Relay.QL`
      fragment on Document {
        _id
      }
    `,
  };
};

export default DeleteDocumentMutation;

