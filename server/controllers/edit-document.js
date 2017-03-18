import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';
import populateInventory from './populate-inventory';

function editDocument({ doc, userID }) {
  const documentID = doc._id;
  const query = {
    'documents._id': documentID,
    owners: userID,
  };

  return Inventory.findOne(query)
    .then(inventory => {
      if (!inventory) throw new Error(`Document not found: ${documentID}`);

      const editedDoc = {
        ...doc,
        lastEdit: {
          user: userID,
          date: new Date(),
        },
      };

      const docIndex = inventory.documents.findIndex(
        document => document._id.toString() === documentID
      );

      const prevDoc = inventory.documents.splice(docIndex, 1, editedDoc)[0];

      if (editedDoc.act === 'inventory' || prevDoc.act === 'inventory') {
        computeProductList(inventory);
      } else {
        // avoid reapplying all existing documents if
        // no inventory act involved
        computeProductList(inventory, prevDoc, false);
        computeProductList(inventory, editedDoc, true);
      }

      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        new: true,
        upsert: false,
        runValidators: true,
      }).exec().then(populateInventory);
    });
}

export default editDocument;

