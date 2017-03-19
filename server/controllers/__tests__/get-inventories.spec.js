import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import getInventories from '../get-inventories';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('get the inventory with inventoryID', async (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.owners[0];
  const inventory = await getInventories({ inventoryID, userID });
  t.is(inventory._id.toString(), demoInventory._id);
});

test('get inventories array with userID', async (t) => {
  const inventories = await getInventories({ userID: demoUser._id });
  t.is(inventories[0]._id.toString(), demoInventory._id);
});

test('get empty array if user does not own any inventory', async (t) => {
  const userID = '58c9355432bf6fee550eca40';
  const inventories = await getInventories({ userID });
  t.true(Array.isArray(inventories));
  t.is(inventories.length, 0);
});

test('reject if user does not own the inventory', (t) => {
  const userID = '58ccd372c5e193c038b2e940';
  const inventoryID = demoInventory._id;
  t.throws(getInventories({ inventoryID, userID }));
});

