import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';

function makeDocument({ doc, inventoryID, userID }) {
  return Inventory.findById(inventoryID).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Inventory not found: ${inventoryID}`);

      const productList = inventory.products.map(prod => prod.name);
      const isValidContent = doc.content.length > 0 &&
        doc.content.every(prod => productList.includes(prod.name.trim()));

      if (!isValidContent) throw new Error('Unknown product!');

      return inventory;
    })
    .then(inventory => {
      computeProductList(inventory, doc, true);

      inventory.documents.push({
        ...doc,
        lastEdit: {
          user: userID,
          date: new Date(),
        },
      });

      return inventory.save();
    });
}

export default makeDocument;

