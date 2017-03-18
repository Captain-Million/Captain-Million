import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import createInventory from '../create-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('create a new empty inventory and add user as owner/creator', t => {
  const userID = demoUser._id;

  return createInventory({ userID })
    .then(inventory => {
      t.is(inventory.owners[0]._id.toString(), userID);
      t.is(inventory.creator._id.toString(), userID);
      t.is(inventory.owners[0].name, demoUser.name);
      t.is(inventory.creator.name, demoUser.name);
      t.is(inventory.products.length, 0);
      t.is(inventory.documents.length, 0);
    });
});

