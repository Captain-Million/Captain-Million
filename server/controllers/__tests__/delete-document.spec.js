import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import Inventory from '../../models/inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoInventory from '../../../__demo-data/demo-inventory';
import deleteDocument from '../delete-document';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('delete and revert an inventory document', async (t) => {
  const documentID = demoInventory.documents[9]._id;
  const userID = demoInventory.owners[0];

  const inventory = await deleteDocument({ documentID, userID });
  t.is(inventory.products[1].quantity, 3);
  t.falsy(inventory.documents.find(
    doc => doc._id.toString() === documentID
  ));
});

test('delete and revert an arrival document', async (t) => {
  const documentID = demoInventory.documents[4]._id;
  const userID = demoInventory.owners[0];

  const inventory = await deleteDocument({ documentID, userID });
  t.is(inventory.products[9].quantity, 8);
  t.falsy(inventory.documents.find(
    doc => doc._id.toString() === documentID
  ));
});

test('delete and revert a dispatch document', async (t) => {
  const documentID = demoInventory.documents[2]._id;
  const userID = demoInventory.owners[0];

  const inventory = await deleteDocument({ documentID, userID });
  t.is(inventory.products[0].quantity, 4);
  t.falsy(inventory.documents.find(
    doc => doc._id.toString() === documentID
  ));
});

test('reject delete if user does not own the inventory', (t) => {
  const documentID = demoInventory.documents[5]._id;
  const userID = '58cccfc988dcec9b9cb67b54';
  t.throws(deleteDocument({ documentID, userID }));
});

test('reject invalid documentID', (t) => {
  const invalidID = '58c8df5b1c1c0692623c39d4';
  const userID = demoInventory.owners[0];
  t.throws(deleteDocument({ userID, documentID: invalidID }));
});

test('reject deleting inventory act if causes -ve quantity', async (t) => {
  const documentID = demoInventory.documents[12]._id;
  const userID = demoInventory.owners[0];

  t.plan(3);
  try {
    await deleteDocument({ documentID, userID });
    t.fail();
  } catch (e) {
    const inventory = await Inventory
      .findOne({ 'documents._id': documentID })
      .exec();
    t.is(inventory.products[4].quantity, 10);
    t.is(inventory.products[6].quantity, 0);
    t.truthy(inventory.documents.find(
      doc => doc._id.toString() === documentID
    ));
  }
});

test('reject deletion of arrival act if causes -ve quantity', async (t) => {
  const documentID = demoInventory.documents[13]._id;
  const userID = demoInventory.owners[0];

  try {
    await deleteDocument({ documentID, userID });
    t.fail();
  } catch (e) {
    const inventory = await Inventory
      .findOne({ 'documents._id': documentID })
      .exec();
    t.is(inventory.products[4].quantity, 10);
    t.is(inventory.products[6].quantity, 0);
    t.truthy(inventory.documents.find(
      doc => doc._id.toString() === documentID
    ));
  }
});

