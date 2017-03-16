import Inventory from '../models/inventory';

function getInventories({ inventoryID, ownerID }) {
// inventoryID takes precedence over ownerID
  const query = inventoryID ?
    { _id: inventoryID } :
    { owners: ownerID };

  return Inventory.find(query).exec()
    .then(inventories => {
      if (inventories.length === 0) throw new Error('Inventory not found!');

      if (inventoryID) return inventories[0];

      return inventories;
    });
}

export default getInventories;
