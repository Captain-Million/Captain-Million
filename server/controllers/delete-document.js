import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';

function deleteDocument({ documentID }) {
  const query = { 'documents._id': documentID };

  return Inventory.findOne(query).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Invalid document ID: ${documentID}`);

      // remove the document
      const indexToDelete = inventory.documents.findIndex(
        doc => doc._id.toString() === documentID
      );
      const docToDelete = inventory.documents.splice(indexToDelete, 1)[0];

      // revert the document
      computeProductList(inventory, docToDelete, false);

      // save and validate the inventory
      return inventory.save();
    });
}

export default deleteDocument;

