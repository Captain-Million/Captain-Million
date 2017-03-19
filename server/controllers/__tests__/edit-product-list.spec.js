import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoInventory from '../../../__demo-data/demo-inventory';
import editProductList from '../edit-product-list';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('add a new product', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.owners[0];
  const editedProductNames = demoInventory.products
    .map(product => product.name);

  const newProduct = 'My New Product';
  editedProductNames.push(newProduct);

  return editProductList({ editedProductNames, inventoryID, userID })
    .then((inventory) => {
      t.truthy(inventory.products.find(
        prod => prod.name === newProduct && prod.quantity === 0
      ));

      inventory.products.forEach((prod) => {
        if (prod.name === newProduct) return;

        const demoQuantity = demoInventory.products
          .find(p => p.name === prod.name).quantity;

        t.is(prod.quantity, demoQuantity);
      });
    });
});

test('remove a product also remove related document entries', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.owners[0];
  const editedProductNames = demoInventory.products
    .map(prod => prod.name)
    .slice(1);

  return editProductList({ inventoryID, editedProductNames, userID })
    .then((inventory) => {
      t.falsy(inventory.products.find(
        prod => prod.name === demoInventory.products[0].name)
      );
      inventory.documents.forEach((doc) => {
        t.falsy(doc.content.find(
          entry => entry.name === demoInventory.products[0].name
        ));
      });
    });
});

test('add and remove some products with trimmed names', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.owners[0];
  const editedProductNames = demoInventory.products
    .map(prod => prod.name)
    .slice(2);

  const newProducts = [' Some new product  ', '  Some new product II  '];
  editedProductNames.push(...newProducts);

  return editProductList({ inventoryID, editedProductNames, userID })
    .then((inventory) => {
      t.falsy(inventory.products.find(
        prod => prod.name === demoInventory.products[1].name
      ));
      t.truthy(inventory.products.find(
        prod => prod.name === newProducts[1].trim()
      ));
      inventory.documents.forEach((doc) => {
        t.falsy(doc.content.find(
          entry => entry.name === demoInventory.products[1].name
        ));
      });
    });
});

test('reject if inventory not found', (t) => {
  const inventoryID = '58c92bb2483976dd98c00b1f';
  const userID = demoInventory.owners[0];
  const editedProductNames = [];
  t.throws(editProductList({ inventoryID, editedProductNames, userID }));
});

test('reject if user does not own the inventory', (t) => {
  const inventoryID = demoInventory._id;
  const userID = '58ccd25947e908d80108804f';
  const editedProductNames = [];
  t.throws(editProductList({ inventoryID, editedProductNames, userID }));
});

