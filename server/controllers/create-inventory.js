import Inventory from '../models/inventory';

function createInventory({ userID }) {
  return Inventory.create({
    creator: userID,
    owners: [userID],
  });
}

export default createInventory;

