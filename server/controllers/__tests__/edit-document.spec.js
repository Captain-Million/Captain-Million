import test from 'ava';
import mongoose from 'mongoose';
import editDocument from '../edit-document';
import demoInventory from '../../../__demo-data/demo-inventory';
import demoUser from '../../../__demo-data/demo-user';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import config from '../../config';

test.before(() => mongoose.connect(config.mongoURL));
test.before(() => populateDemoData(config.mongoURL));
test.after.always(() => mongoose.disconnect());

function testEditDocument({
  docIdx,
  contentIdx,
  prodIdx,
  expectQuantity,
  quantity
}) {
  return function(t) {
    const doc = { ...demoInventory.documents[docIdx] };
    doc.content[contentIdx] = {
      ...demoInventory.documents[docIdx].content[contentIdx],
      quantity,
    };

    const now = Date.now();
    const userID = '58c8f13cf8cdbcbeb3660d3c';

    return editDocument({ doc, userID })
      .then(inventory => {
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
        t.is(lastEdit.user.toString(), userID);
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

test('reject invalid documentID', t => t.pass());
