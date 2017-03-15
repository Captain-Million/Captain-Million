import test from 'ava';
import mongoose from 'mongoose';
import makeDocument from '../make-document';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import demoInventory from '../../../__demo-data/demo-inventory';
import config from '../../config';

test.before(() => populateDemoData(config.mongoURL));
test.before(() => mongoose.connect(config.mongoURL));
test.after.always(() => mongoose.disconnect());

test('creates an arrival document', t => {
  const productIndex = 0;
  const increment = 1999;

  const newDoc = {
    act: 'arrival',
    content: [{
      name: demoInventory.products[productIndex].name,
      quantity: increment,
    }],
  };

  const now = Date.now();

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then(inventory => {
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
      doc.lastEdit.user.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now
    )
  )));
});

test('creates a dispatch document', t => {
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

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then(inventory => {
    productIndices.forEach(idx => t.is(
      inventory.products[idx].quantity,
      demoInventory.products[idx].quantity - decrement
    ));
    return inventory;
  }).then(inventory => t.true(inventory.documents.some(
    doc => (
      doc.act === newDoc.act &&
      doc.content[0].name === newDoc.content[0].name &&
      doc.content[0].quantity === newDoc.content[0].quantity &&
      doc.lastEdit.user.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now
    )
  )));
});

test('creates an inventory document', t => {
  const productIndices = [2, 3];
  const value = 42;

  const newDoc = {
    act: 'inventory',
    content: productIndices.map(idx => ({
      name: demoInventory.products[idx].name,
      quantity: value,
    })),
  };

  const now = Date.now();

  return makeDocument({
    doc: newDoc,
    inventoryID: demoInventory._id,
    userID: demoUser._id,
  }).then(inventory => {
    productIndices.forEach(idx => t.is(
      inventory.products[idx].quantity,
      value
    ));
    return inventory;
  }).then(inventory => t.true(inventory.documents.some(
    doc => (
      doc.act === newDoc.act &&
      doc.content[0].name === newDoc.content[0].name &&
      doc.content[0].quantity === newDoc.content[0].quantity &&
      doc.lastEdit.user.toString() === demoUser._id &&
      doc.lastEdit.date <= Date.now() &&
      doc.lastEdit.date >= now
    )
  )));
});

test('reject invalid inventoryID', t => {
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

test('reject invalid act', t => {
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

test('reject invalid product', t => {
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

test('reject dispatch act that exceeds quantity in-stock', t => {
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

