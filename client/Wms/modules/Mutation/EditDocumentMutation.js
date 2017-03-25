import Relay from 'react-relay';

// eslint-disable class-methods-use-this
// reason: cannot use static method here since the class
// interface is defined by Relay, not me :)
class EditDocumentMutation extends Relay.Mutation {
  static fragments = {
    inventory: () => Relay.QL`
      fragment on Inventory {
        id
        products {
          name
          quantity
        }
        documents {
          id
          act
          content {
            name
            quantity
          }
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation { editDocument }`;
  }

  getVariables() {
    const transformedDoc = {
      act: this.props.doc.act,
      _id: this.props.doc.id,
      content: this.props.doc.content.map(entry => ({
        name: entry.name,
        quantity: entry.quantity,
      })),
    };

    return { doc: transformedDoc };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on InventoryPayload {
        inventory {
          documents 
          products
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        inventory: this.props.inventory.id,
      },
    }];
  }
}

export default EditDocumentMutation;

