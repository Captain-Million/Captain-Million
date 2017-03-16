import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import Inventory from '../../models/inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoInventory from '../../../__demo-data/demo-inventory';
import deleteDocument from '../delete-document';
import config from '../../config';

test.before(() => {
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData(config.mongoURL));
test.after.always(() => mongoose.disconnect());

test('delete and revert an inventory document', t => {
  const documentID = demoInventory.documents[9]._id;

  return deleteDocument({ documentID })
    .then(inventory => {
      t.is(inventory.products[1].quantity, 3);
      t.falsy(inventory.documents.find(
        doc => doc._id.toString() === documentID
      ));
    });
});

test('delete and revert an arrival document', t => {
  const documentID = demoInventory.documents[4]._id;

  return deleteDocument({ documentID })
    .then(inventory => {
      t.is(inventory.products[9].quantity, 8);
      t.falsy(inventory.documents.find(
        doc => doc._id.toString() === documentID
      ));
    });
});

test('delete and revert a dispatch document', t => {
  const documentID = demoInventory.documents[2]._id;

  return deleteDocument({ documentID })
    .then(inventory => {
      t.is(inventory.products[0].quantity, 4);
      t.falsy(inventory.documents.find(
        doc => doc._id.toString() === documentID
      ));
    });
});

test('reject invalid documentID', t => {
  const invalidID = '58c8df5b1c1c0692623c39d4';
  t.throws(deleteDocument({ documentID: invalidID }));
});

test('reject deletion of inventory act if leads to invalid quantity', t => {
  const documentID = demoInventory.documents[12]._id;

  return deleteDocument({ documentID })
    .then(
      t.fail,
      () => Inventory.findOne({ 'documents._id': documentID }).exec()
    ).then(inventory => {
      t.is(inventory.products[4].quantity, 10);
      t.is(inventory.products[6].quantity, 0);
      t.truthy(inventory.documents.find(
        doc => doc._id.toString() === documentID
      ));
    });
});

test('reject deletion of arrival act if leads to invalid quantity', t => {
  const documentID = demoInventory.documents[13]._id;

  return deleteDocument({ documentID })
    .then(
      t.fail,
      () => Inventory.findOne({ 'documents._id': documentID }).exec()
    ).then(inventory => {
      t.is(inventory.products[4].quantity, 10);
      t.is(inventory.products[6].quantity, 0);
      t.truthy(inventory.documents.find(
        doc => doc._id.toString() === documentID
      ));
    });
});

