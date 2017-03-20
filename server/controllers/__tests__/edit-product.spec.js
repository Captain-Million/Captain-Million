import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import editProduct from '../edit-product';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoInventory from '../../../__demo-data/demo-inventory';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('changing product name updates all related documents', async (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.creator;
  const productName = demoInventory.products[0].name;
  const updates = { name: 'HP PROBOOK100' };

  const inventory = await editProduct({
    inventoryID,
    userID,
    productName,
    updates,
  });
  t.true(inventory.products.some(
    prod => prod.name === updates.name.trim()
  ));
  t.true(inventory.documents.some(
    doc => doc.content.some(entry => entry.name === updates.name.trim())
  ));
});

test('editing the quantity/_id of a product has NO effect', async (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.creator;
  const productName = demoInventory.products[1].name;
  const updates = { _id: '58cd382fdd7859eb18dfffb6', quantity: 1000 };

  const inventory = await editProduct({
    inventoryID,
    userID,
    productName,
    updates,
  });
  const targetProduct = inventory.products
    .find(prod => prod.name === productName);
  t.true(
    targetProduct._id.toString() === demoInventory.products[1]._id &&
    demoInventory.products[1]._id !== updates._id
  );
  t.true(
    targetProduct.quantity === demoInventory.products[1].quantity &&
    demoInventory.products[1].quantity !== updates.quantity
  );
});

test('reject if product does not exist', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.creator;
  const productName = 'A NAME THAT DOES NOT EXIST :(';
  const updates = { name: 'A NEW NAME :)' };
  t.throws(editProduct({ inventoryID, userID, productName, updates }));
});

test('reject if user does not own the inventory', (t) => {
  const inventoryID = demoInventory._id;
  const userID = '58cd3758b0a5f17696daabd8';
  const productName = demoInventory.products[1].name;
  const updates = { name: 'A NEW NAME :)' };
  t.throws(editProduct({ inventoryID, userID, productName, updates }));
});

test('reject if new name already exists', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.creator;
  const productName = demoInventory.products[2].name;
  const updates = { name: demoInventory.products[3].name };
  t.throws(editProduct({ inventoryID, userID, productName, updates }));
});

