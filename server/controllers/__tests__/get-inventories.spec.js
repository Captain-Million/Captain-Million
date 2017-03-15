import test from 'ava';
import mongoose from 'mongoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import getInventories from '../get-inventories';
import config from '../../config';

test.before(() => populateDemoData(config.mongoURL));
test.before(() => mongoose.connect(config.mongoURL));
test.after.always(() => mongoose.disconnect());

test('get the inventory with inventoryID', t => {
  return getInventories({ inventoryID: demoInventory._id })
    .then(inventory => t.is(inventory._id.toString(), demoInventory._id));
});

test('get inventories array with ownerID', t => {
  return getInventories({ ownerID: demoUser._id })
    .then(inventories => t.is(
      inventories[0]._id.toString(),
      demoInventory._id,
    ));
});

test('reject if not found', t => {
  const id = '58c9355432bf6fee550eca40';
  t.throws(getInventories({ ownerID: id }));
  t.throws(getInventories({ inventoryID: id }));
});

