import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import demoInventory from '../../../__demo-data/demo-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import updateOwners from '../update-owners';
import User from '../../models/user';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('update owners array in an inventory created by user', async (t) => {
  const userID = demoInventory.creator;
  const inventoryID = demoInventory._id;
  const owners = [userID];
  const user = await User.create({ name: 'foo' });
  owners.push(user._id.toString());

  const inventory = await updateOwners({ userID, inventoryID, owners });
  const updatedOwners = inventory.owners
    .map(owner => owner._id.toString());
  t.deepEqual(updatedOwners, owners);
});

test('reject if removing creator from owners', (t) => {
  const userID = demoInventory.creator;
  const inventoryID = demoInventory._id;
  const owners = ['58ccef5cadb5e93d91c78952'];
  t.throws(updateOwners({ userID, inventoryID, owners }));
});

test('reject if user is not creator of the inventory', (t) => {
  const userID = '58ccf026c29dfce7ce55a9fd';
  const inventoryID = demoInventory._id;
  const owners = [userID, demoInventory.creator];
  t.throws(updateOwners({ userID, inventoryID, owners }));
});

