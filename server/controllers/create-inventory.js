import Inventory from '../models/inventory';
import populateInventory from './populate-inventory';

function createInventory({ userID }) {
  return Inventory.create({
    creator: userID,
    owners: [userID],
  }).then(populateInventory);
}

export default createInventory;

