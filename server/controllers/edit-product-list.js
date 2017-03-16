import Inventory from '../models/inventory';

// input: editedProductNames as array of string
// mutate inventory.products to match products while
// keeping existing quantities (if any)
// output: updated inventory
function editProductList({ editedProductNames, inventoryID }) {
  return Inventory.findById(inventoryID)
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

      inventory.products = newProductList;

      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        new: true,
        upsert: false,
        runValidators: true,
      }).exec()
        .then(updatedInventory => {
          if (!updatedInventory) throw new Error('Fail to edit!');

          return updatedInventory;
        });
    });
}

export default editProductList;

