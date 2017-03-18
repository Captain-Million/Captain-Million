import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';

function deleteDocument({ documentID, userID }) {
  const query = {
    'documents._id': documentID,
    owners: userID,
  };

  return Inventory.findOne(query).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Document not found: ${documentID}`);

      // remove the document
      const docToDelete = inventory.documents.find(
        doc => doc._id.toString() === documentID
      );
      inventory.documents.pull({ _id: documentID });

      // revert the state
      computeProductList(inventory, docToDelete, false);

      // save and validate the inventory
      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        upsert: false,
        new: true,
        runValidators: true,
      }).exec()
        .then(updatedInventory => {
          if (!updatedInventory) throw new Error('Fail to update!');

          return updatedInventory;
        });
    });
}

export default deleteDocument;

