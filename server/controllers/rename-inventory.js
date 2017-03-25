import Inventory from '../models/inventory';
import populateInventory from './populate-inventory';

function renameInventory({ userID, inventoryID, inventoryName }) {
  const query = {
    owners: userID,
    _id: inventoryID,
  };

  const updates = { $set: { name: inventoryName } };

  const options = {
    new: true,
    upsert: false,
    setDefaultsOnInsert: true,
    runValidators: true,
  };

  return Inventory.findOneAndUpdate(query, updates, options)
    .exec()
    .then(populateInventory);
}

export default renameInventory;

