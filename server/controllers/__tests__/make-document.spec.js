import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import makeDocument from '../make-document';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('creates an arrival document with custom title', (t) => {
  const productIndex = 0;
  const increment = 1999;

  const newDoc = {
    act: 'arrival',
    content: [{
      name: demoInventory.products[productIndex].name,
      quantity: increment,
    }],
    title: 'My awesome arrival doc',
  };

  const now = Date.now();

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then((inventory) => {
    t.is(
      inventory.products[productIndex].quantity,
      demoInventory.products[productIndex].quantity + increment,
    );
    return inventory;
  }).then(inventory => t.true(inventory.documents.some(
    doc => (
      doc.act === newDoc.act &&
      doc.content[0].name === newDoc.content[0].name &&
      doc.content[0].quantity === newDoc.content[0].quantity &&
      doc.lastEdit.user._id.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now &&
      doc.title === newDoc.title
    )
  )));
});

test('creates a dispatch document with default title', (t) => {
  const productIndices = [1, 4];
  const decrement = 3;

  const newDoc = {
    act: 'dispatch',
    content: productIndices.map(idx => ({
      name: demoInventory.products[idx].name,
      quantity: decrement,
    })),
  };

  const now = Date.now();
  const defaultTitle = 'Untitled';

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then((inventory) => {
    productIndices.forEach(idx => t.is(
      inventory.products[idx].quantity,
      demoInventory.products[idx].quantity - decrement
    ));
    return inventory;
  }).then(inventory => t.true(inventory.documents.some(
    doc => (
      doc.title === defaultTitle &&
      doc.act === newDoc.act &&
      doc.content[0].name === newDoc.content[0].name &&
      doc.content[0].quantity === newDoc.content[0].quantity &&
      doc.lastEdit.user._id.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now
    )
  )));
});

test('creates an inventory document with trimmed title', (t) => {
  const productIndices = [2, 3];
  const value = 42;

  const newDoc = {
    act: 'inventory',
    content: productIndices.map(idx => ({
      name: demoInventory.products[idx].name,
      quantity: value,
    })),
    title: '  a title with some leading and trailing spaces   ',
  };

  const now = Date.now();

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then((inventory) => {
    productIndices.forEach(idx => t.is(
      inventory.products[idx].quantity,
      value
    ));
    return inventory;
  }).then(inventory => t.true(inventory.documents.some(
    doc => (
      doc.title === newDoc.title.trim() &&
      doc.act === newDoc.act &&
      doc.content[0].name === newDoc.content[0].name &&
      doc.content[0].quantity === newDoc.content[0].quantity &&
      doc.lastEdit.user._id.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now
    )
  )));
});

test('reject invalid inventoryID', (t) => {
  const newDoc = {
    act: 'arrival',
    content: [{ name: demoInventory.products[0].name, quantity: 0 }],
  };
  t.throws(makeDocument({
    doc: newDoc,
    inventoryID: '58c8e2ad945588d256721488',
    userID: demoUser._id,
  }));
});

test('reject invalid act', (t) => {
  const newDoc = {
    act: 'invalid',
    content: [{ name: demoInventory.products[0].name, quantity: 0 }],
  };
  t.throws(makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }));
});

test('reject invalid product', (t) => {
  const newDoc = {
    act: 'arrival',
    content: [{ name: 'invalid', quantity: 0 }],
  };
  t.throws(makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }));
});

test('reject dispatch act that exceeds quantity in-stock', (t) => {
  const newDoc = {
    act: 'dispatch',
    content: [{ name: demoInventory.products[6].name, quantity: 999999 }],
  };
  t.throws(makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }));
});

test('reject if user does not own the inventory', (t) => {
  const userID = '58ccdb4001321a44bcb19bb1';
  const inventoryID = demoInventory._id;
  const doc = {
    act: 'arrival',
    content: [{ name: demoInventory.products[0].name, quantity: 1 }],
  };
  t.throws(makeDocument({ doc, inventoryID, userID }));
});
