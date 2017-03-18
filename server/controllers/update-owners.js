import Inventory from '../models/inventory';

function updateOwners({ inventoryID, userID, owners }) {
  if (!owners.includes(userID)) {
    return Promise.reject(new Error('Cannot remove creator from owners!'));
  }

  const query = { _id: inventoryID, creator: userID };
  const updates = { $set: { owners } };
  const options = {
    new: true,
    upsert: false,
    runValidators: true,
    setDefaultsOnUpdate: true,
  };

  return Inventory.findOneAndUpdate(query, updates, options).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Inventory not found: ${inventoryID}`);

      return inventory;
    });
}

export default updateOwners;

