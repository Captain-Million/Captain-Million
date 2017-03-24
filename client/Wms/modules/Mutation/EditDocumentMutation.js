import Relay from 'react-relay';

class EditDocumentMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { editDocument }`;
  }

  getVariables() {
    return { doc: this.props.doc };
  }

  getFatQuery() {
    // TODO
    return Relay.QL`
      fragment on InventoryPayload {
        inventory {
          documents {
            act,
            content {
              name,
              quantity,
            },
            lastEdit {
              user {
                name
              },
              date
            },
          }
          products {
            quantity
          }
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
        _id,
        act,
        content {
          name,
          quantity,
        }
      }
    `,
  };
};

export default EditDocumentMutation;

