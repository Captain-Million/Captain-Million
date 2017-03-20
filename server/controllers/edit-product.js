import Inventory from '../models/inventory';
import populateInventory from './populate-inventory';

function editProduct({ userID, inventoryID, productName, updates }) {
  const query = {
    owners: userID,
    _id: inventoryID,
  };

  return Inventory.findOne(query).exec()
    .then((inventory) => {
      if (!inventory) {
        throw new Error(`Inventory not found: ${inventoryID}`);
      }

      const targetProduct = inventory.products
        .find(prod => prod.name === productName.trim());

      if (!targetProduct) {
        throw new Error(`Product not found: ${productName}`);
      }

      const newProductFields = { ...updates };

      // in case of rename, check for name collisions
      if (targetProduct.name !== newProductFields.name) {
        const hasCollision = inventory.products.some(
          prod => prod.name === newProductFields.name
        );
        if (hasCollision) {
          throw new Error(`Fail to edit product: ${newProductFields.name} already exists!`);
        }
      }

      if (newProductFields.name) {
        newProductFields.name = newProductFields.name.trim();
        if (targetProduct.name !== newProductFields.name) {
          // update all associated documents after rename
          inventory.documents.forEach((doc) => {
            doc.content.forEach((entry) => {
              if (entry.name === targetProduct.name) {
                entry.set({ name: newProductFields.name });
              }
            });
          });
        }
      }
      delete newProductFields._id;
      delete newProductFields.quantity;


      Object.assign(targetProduct, newProductFields);

      return Inventory.findByIdAndUpdate(inventory._id, inventory, {
        new: true,
        upsert: false,
        runValidators: true,
      }).exec();
    })
    .then(populateInventory);
}

export default editProduct;

