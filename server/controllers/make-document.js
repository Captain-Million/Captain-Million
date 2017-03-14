import Inventory from '../models/inventory';

function makeDocument({ doc, inventoryID }) {
  return Inventory.findById(inventoryID).exec()
    .then(inventory => {
      if (!inventory) throw new Error(`Inventory not found: ${inventoryID}`);

      const productList = inventory.products.map(prod => prod.name);
      const isValidContent = doc.content.length > 0 &&
        doc.content.every(prod => productList.includes(prod.name.trim()));

      if (!isValidContent) throw new Error('Unknown product!');

      let operator;
      switch (doc.act) {
        case 'arrival':
          operator = '$inc';
          break;

        case 'dispatch':
          operator = '$inc';
          break;

        case 'inventory':
          operator = '$set';
          break;

        default:
          throw new Error(`Invalid ACT: ${doc.act}`);
      }

      const updates = {
        $push: { documents: doc },
        [operator]: {},
      };

      doc.content.forEach(prod => {
        const index = productList.findIndex(p => p === prod.name);
        const value = doc.act === 'dispatch' ?
          -1 * prod.quantity :
          prod.quantity;
        updates[operator][`products.${index}.quantity`] = value;
      });

      const options = {
        new: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      };

      return Inventory.findByIdAndUpdate(inventoryID, updates, options);
    });
}

export default makeDocument;
