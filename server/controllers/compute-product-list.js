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
  if (doc.act === 'inventory' && !isNew) return recompute(inventory);

  doc.content.forEach(entry => {
    const productIndex = inventory.products.findIndex(
      product => product.name.trim() === entry.name.trim()
    );

    if (productIndex === -1) return;

    switch (doc.act) {
      case 'arrival':
        if (isNew) {
          inventory.products[productIndex].quantity += entry.quantity;
        } else {
          inventory.products[productIndex].quantity -= entry.quantity;
        }
        break;
      case 'dispatch':
        if (isNew) {
          inventory.products[productIndex].quantity -= entry.quantity;
        } else {
          inventory.products[productIndex].quantity += entry.quantity;
        }
        break;
      case 'inventory':
        inventory.products[productIndex].quantity = entry.quantity;
        break;
      default:
        throw new Error(`Unknown document act: ${doc.act}`);
    }
  });

  return inventory;
}

function recompute(inventory) {
  inventory.products.forEach(product => product.quantity = 0);
  inventory.documents.forEach(doc => apply(inventory, doc, true));
  return inventory;
}

function computeProductList(inventory, doc, isNew = false) {
  if (doc) return apply(inventory, doc, isNew);

  return recompute(inventory);
}

export default computeProductList;

