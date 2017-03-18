import Inventory from '../models/inventory';
import computeProductList from './compute-product-list';

function makeDocument({ doc, inventoryID, userID }) {
  const query = {
    _id: inventoryID,
    owners: userID,
  };

  return Inventory.findOne(query).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Inventory not found: ${inventoryID}`);

      const productList = inventory.products.map(prod => prod.name);
      const isValidContent = doc.content.length > 0 &&
        doc.content.every(prod => productList.includes(prod.name.trim()));

      if (!isValidContent) throw new Error('Unknown product!');

      return inventory;
    })
    .then(inventory => {
      const newDoc = { ...doc };
      delete newDoc._id;

      computeProductList(inventory, newDoc, true);

      inventory.documents.push({
        ...newDoc,
        lastEdit: {
          user: userID,
          date: new Date(),
        },
      });

      return inventory.save();
    });
}

export default makeDocument;

