import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import createInventory from '../create-inventory';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.after.always(() => mongoose.disconnect());

test('create a new empty inventory and add user as owner', t => {
  const userID = '58c93e050360c3a80666524f';

  return createInventory({ userID })
    .then(inventory => {
      t.is(inventory.owners[0].toString(), userID);
      t.is(inventory.products.length, 0);
      t.is(inventory.documents.length, 0);
    });
});

