import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import demoInventory from '../../../__demo-data/demo-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import updateOwners from '../update-owners';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('update owners array in an inventory created by user', t => {
  const userID = demoInventory.creator;
  const inventoryID = demoInventory._id;
  const owners = [userID, '58ccef5cadb5e93d91c78952'];

  return updateOwners({ userID, inventoryID, owners })
    .then(inventory => {
      const updatedOwners = inventory.owners
        .map(owner => owner.toString());
      t.deepEqual(updatedOwners, owners);
    });
});

test('reject if removing creator from owners', t => {
  const userID = demoInventory.creator;
  const inventoryID = demoInventory._id;
  const owners = ['58ccef5cadb5e93d91c78952'];
  t.throws(updateOwners({ userID, inventoryID, owners }));
});

test('reject if user is not creator of the inventory', t => {
  const userID = '58ccf026c29dfce7ce55a9fd';
  const inventoryID = demoInventory._id;
  const owners = [userID, demoInventory.creator];
  t.throws(updateOwners({ userID, inventoryID, owners }));
});

