import Inventory from '../models/inventory';

function makeDocument({ doc, inventoryID, userID }) {
  return Inventory.findById(inventoryID).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Inventory not found: ${inventoryID}`);

      const productList = inventory.products.map(prod => prod.name);
      const isValidContent = doc.content.length > 0 &&
        doc.content.every(prod => productList.includes(prod.name.trim()));

      if (!isValidContent) throw new Error('Unknown product!');

      doc.content.forEach(prod => {
        const prodToUpdate = inventory.products
          .find(p => p.name === prod.name);
        switch (doc.act) {
          case 'arrival':
            prodToUpdate.quantity += prod.quantity;
            break;

          case 'dispatch':
            prodToUpdate.quantity -= prod.quantity;
            break;

          case 'inventory':
            prodToUpdate.quantity = prod.quantity;
            break;

          default:
            throw new Error(`Invalid ACT: ${doc.act}`);
        }
      });

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
