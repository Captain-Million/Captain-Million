import Inventory from '../models/inventory';

function createInventory({ userID }) {
  return Inventory.create({ owners: [userID] });
}

export default createInventory;

