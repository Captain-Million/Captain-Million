function populateInventory(inventory) {
  if (!inventory) throw new Error('Fail to populate inventory!');

  return inventory
    .populate('creator', 'name')
    .populate('owners', 'name')
    .populate('documents.lastEdit.user', 'name')
    .execPopulate();
}

export default populateInventory;

