import Inventory from '../models/inventory';

function getInventories({ inventoryID, userID }) {
  const query = { owners: userID };
  if (inventoryID) Object.assign(query, { _id: inventoryID });

  return Inventory.find(query).exec()
    .then(inventories => {
      if (inventoryID && inventories.length === 0) {
        throw new Error('Inventory not found!');
      }

      if (inventoryID) return inventories[0];

      return inventories;
    });
}

export default getInventories;

