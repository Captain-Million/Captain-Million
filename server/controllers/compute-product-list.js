// computeProductList
// input: instance of Inventory model
// if doc is provided
//   revert the effect of the doc on inventory
// if isNew is true
//   apply the effect of the doc on inventory
// otherwise:
//   reset quantity of each product to 0 and
//   loop through and apply the documents to the products
// output: same instance of Inventory model with mutated products array
//         documents array is unchanged
function apply(inventory, doc, isNew) {
  if (doc.act === 'inventory' && !isNew) {
    throw new Error('Cannot revert an inventory act without the whole document list!');
  }

  doc.content.forEach(entry => {
    const productIndex = inventory.products.findIndex(
      product => product.name.trim() === entry.name.trim()
    );

    if (productIndex === -1) return;

    const targetProduct = inventory.products[productIndex];
    switch (doc.act) {
      case 'arrival':
        if (isNew) {
          targetProduct.quantity += entry.quantity;
        } else {
          targetProduct.quantity -= entry.quantity;
        }
        break;
      case 'dispatch':
        if (isNew) {
          targetProduct.quantity -= entry.quantity;
        } else {
          targetProduct.quantity += entry.quantity;
        }
        break;
      case 'inventory':
        targetProduct.quantity = entry.quantity;
        break;
      default:
        throw new Error(`Unknown document act: ${doc.act}`);
    }
  });

  return inventory;
}

function recompute(inventory) {
  inventory.products.forEach(product => Object.assign(product, {
    quantity: 0,
  }));
  inventory.documents.forEach(doc => apply(inventory, doc, true));

  return inventory;
}

function computeProductList(inventory, doc, isNew = false) {
  const needRecompute = !doc || (doc.act === 'inventory' && !isNew);
  if (needRecompute) return recompute(inventory);

  return apply(inventory, doc, isNew);
}

export default computeProductList;

