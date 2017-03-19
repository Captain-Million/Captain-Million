import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import getInventories from '../get-inventories';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('get the inventory with inventoryID', (t) => {
  const inventoryID = demoInventory._id;
  const userID = demoInventory.owners[0];

  return getInventories({ inventoryID, userID })
    .then(inventory => t.is(inventory._id.toString(), demoInventory._id));
});

test('get inventories array with userID', (t) => {
  return getInventories({ userID: demoUser._id })
    .then(inventories => t.is(
      inventories[0]._id.toString(),
      demoInventory._id,
    ));
});

test('get empty array if user does not own any inventory', (t) => {
  const userID = '58c9355432bf6fee550eca40';

  return getInventories({ userID })
    .then((inventories) => {
      t.true(Array.isArray(inventories));
      t.is(inventories.length, 0);
    });
});

test('reject if user does not own the inventory', (t) => {
  const userID = '58ccd372c5e193c038b2e940';
  const inventoryID = demoInventory._id;
  t.throws(getInventories({ inventoryID, userID }));
});

