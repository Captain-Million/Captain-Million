import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import renameInventory from '../rename-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoInventory from '../../../__demo-data/demo-inventory';
import Inventory from '../../models/inventory';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
  await populateDemoData();
});
test.after.always(() => mongoose.disconnect());

test('Rename an inventory', async (t) => {
  const newName = 'Awesome new inventory name';
  const prevInventory = await Inventory.findById(demoInventory._id).exec();
  t.not(prevInventory.name, newName);

  const updatedInventory = await renameInventory({
    userID: demoInventory.creator,
    inventoryID: demoInventory._id,
    inventoryName: newName,
  });
  t.is(updatedInventory.name, newName);
});

