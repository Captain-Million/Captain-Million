import Inventory from '../models/inventory';
import populateInventory from './populate-inventory';

// input: editedProductNames as array of string
// mutate inventory.products to match products while
// keeping existing quantities (if any)
// output: updated inventory
function editProductList({ editedProductNames, inventoryID, userID }) {
  const query = {
    _id: inventoryID,
    owners: userID,
  };

  return Inventory.findOne(query)
    .then(inventory => {
      if (!inventory) {
        throw new Error(`Invalid inventoryID: ${inventoryID}`);
      }

      const trimmedNames = editedProductNames.map(name => name.trim());

      // keep existing products that match the provided names
      const newProductList = inventory.products.filter(
        product => trimmedNames.includes(product.name)
      );

      // add new products
      trimmedNames.forEach(name => {
        const prodExist = !!newProductList.find(prod => prod.name === name);
        if (prodExist) return;

        newProductList.push({ name });
      });

      inventory.set({
        products: newProductList,
      });

      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        new: true,
        upsert: false,
        runValidators: true,
      }).exec();
    })
    .then(populateInventory);
}

export default editProductList;

