import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import createInventory from '../create-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('create empty inventory and add user as owner/creator', async (t) => {
  const userID = demoUser._id;
  const inventory = await createInventory({ userID });
  t.is(inventory.owners[0]._id.toString(), userID);
  t.is(inventory.creator._id.toString(), userID);
  t.is(inventory.owners[0].name, demoUser.name);
  t.is(inventory.creator.name, demoUser.name);
  t.is(inventory.products.length, 0);
  t.is(inventory.documents.length, 0);
});

