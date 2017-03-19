import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import editDocument from '../edit-document';
import demoInventory from '../../../__demo-data/demo-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

function testEditDocument({
  docIdx,
  contentIdx,
  prodIdx,
  expectQuantity,
  quantity,
}) {
  return (t) => {
    const doc = { ...demoInventory.documents[docIdx] };
    doc.content[contentIdx] = {
      ...demoInventory.documents[docIdx].content[contentIdx],
      quantity,
    };

    const now = Date.now();
    const userID = demoInventory.owners[0];

    return editDocument({ doc, userID })
      .then((inventory) => {
        t.is(inventory.products[prodIdx].quantity, expectQuantity);
        t.is(inventory.documents.length, demoInventory.documents.length);
        const {
          _id,
          act,
          content,
          lastEdit,
        } = inventory.documents[docIdx];
        t.is(_id.toString(), doc._id);
        t.is(act, doc.act);
        t.is(content[contentIdx].name, doc.content[contentIdx].name);
        t.is(content[contentIdx].quantity, doc.content[contentIdx].quantity);
        t.is(lastEdit.user._id.toString(), userID);
        t.true(lastEdit.date >= now && lastEdit.date <= Date.now());
      });
  };
}

test('edit arrival document', testEditDocument({
  docIdx: 1,
  contentIdx: 0,
  quantity: 5,
  expectQuantity: 2,
  prodIdx: 0,
}));

test('edit dispatch document', testEditDocument({
  docIdx: 5,
  contentIdx: 0,
  quantity: 5,
  expectQuantity: 6,
  prodIdx: 9,
}));

test('edit inventory document', testEditDocument({
  docIdx: 12,
  contentIdx: 1,
  quantity: 50,
  expectQuantity: 47,
  prodIdx: 6,
}));

test('reject invalid documentID', (t) => {
  const doc = {
    _id: '58c906e4a8ef4699685e07a6',
    act: 'arrival',
    content: [{ name: 'xyz', quantity: 42 }],
  };

  const userID = demoInventory.owners[0];

  t.throws(editDocument({ doc, userID }));
});

test('reject if user does not own the inventory', (t) => {
  const userID = '58ccd18006b1b5a97d2518be';
  const doc = { ...demoInventory.documents[1] };
  t.throws(editDocument({ doc, userID }));
});

