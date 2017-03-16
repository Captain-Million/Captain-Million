import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';

function editDocument({ doc, userID, documentID = doc._id }) {
  const query = { 'documents._id': documentID };

  return Inventory.findOne(query)
    .then(inventory => {
      if (!inventory) throw new Error(`Invalid documentID: ${documentID}`);

      doc.lastEdit.user = userID;
      doc.lastEdit.date = new Date();

      const docIndex = inventory.documents.findIndex(
        doc => doc._id.toString() === documentID
      );

      const prevDoc = inventory.documents.splice(docIndex, 1, doc)[0];

      if (doc.act === 'inventory' || prevDoc.act === 'inventory') {
        computeProductList(inventory);
      } else {
        // avoid reapplying all existing documents if
        // no inventory act involved
        computeProductList(inventory, prevDoc, false);
        computeProductList(inventory, doc, true);
      }

      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        new: true,
        upsert: false,
        runValidators: true,
      }).exec()
        .then(updatedInventory => {
          if (!updatedInventory) throw new Error('Fail to edit!');

          return updatedInventory;
        });
    });
}

export default editDocument;

