import test from 'ava';
import mongoose from 'mongoose';
import makeDocument from '../make-document';
import Inventory from '../../models/inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import config from '../../config';

test.before(() => populateDemoData(config.mongoURL));
test.before(() => mongoose.connect(config.mongoURL));

test('creates a new document', t => {
  const newDoc = {
    act: 'dispatch',
    content: [{
      name: demoInventory.products[0].name,
      quantity: 1999,
    }],
    lastEdit: {
      user: demoUser._id,
      date: new Date(),
    },
  };

  return makeDocument({ doc: newDoc, inventoryID: demoInventory._id });
});

