import test from 'ava';
import { Mockgoose } from 'mockgoose';
import mongoose from 'mongoose';
import express from 'express';
import supertest from 'supertest';
import demoInventory from '../../../__demo-data/demo-inventory';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import graphQLRouter from '../../routes/graphql.route';
import config from '../../config';

const app = express();
app.use(graphQLRouter);
const request = supertest(app);

test.before(() => {
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

function testGraphQLWith(query, variables = {}) {
  return t => request.post('/graphql')
    .send({ query, variables })
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-type', /json/)
    .then(res => {
      t.truthy(res.body.data);
      t.falsy(res.body.errors);
    });
}

const userFields = `
  _id
  name
`;

const inventoryFields = `
  _id
  creator
  owners
  products {
    name
    quantity
  }
  documents {
    _id
    title
    act
    content {
      name
      quantity
    }
    lastEdit {
      user
      date
    }
    createDate
  }
`;

test('me', testGraphQLWith(`
  {
    me {
      ${userFields}
    }
  }
`));

test('getMyInventories', testGraphQLWith(`
  {
    getMyInventories {
      ${inventoryFields}
    }
  }
`));

test('getInventory', testGraphQLWith(`
  query GetInventory($id: ID!) {
    getInventory(inventoryID: $id) {
      ${inventoryFields}
    }
  }
`, { id: demoInventory._id }));

test('createInventory', testGraphQLWith(`
  mutation CreateInventory {
    createInventory {
      ${inventoryFields}
    }
  }
`));

test('deleteDocument', testGraphQLWith(`
  mutation DeleteDocument($id: ID!) {
    deleteDocument(documentID: $id) {
      ${inventoryFields}
    }
  }
`, { id: demoInventory.documents[2]._id }));

const docToEdit = Object.assign(
  {},
  demoInventory.documents[1],
  { content: [{ name: 'HP ProBook', quantity: 99 }] },
);
test('editDocument', testGraphQLWith(`
  mutation editDocument($doc: DocumentInput!) {
    editDocument(doc: $doc) {
      ${inventoryFields}
    }
  }
`, { doc: docToEdit }));

const editedProductNames = [
  demoInventory.products[0].name,
  'OOPS, DELETED EVERYTHING ELSE',
];
test('editProductList', testGraphQLWith(`
  mutation editProductList($list: [String]!, $id: ID!) {
    editProductList(editedProductNames: $list, inventoryID: $id) {
      ${inventoryFields}
    }
  }
`, { list: editedProductNames, id: demoInventory._id }));

const newDoc = {
  act: 'arrival',
  content: [{
    name: demoInventory.products[0].name,
    quantity: 42,
  }],
  title: 'An awesome new doc',
};
test('makeDocument', testGraphQLWith(`
  mutation makeDocument($doc: DocumentInput!, $id: ID!) {
    makeDocument(doc: $doc, inventoryID: $id) {
      ${inventoryFields}
    }
  }
`, { doc: newDoc, id: demoInventory._id }));

test('updateOwners', testGraphQLWith(`
  mutation updateOwners($id: ID!, $owners: [ID]!) {
    updateOwners(inventoryID: $id, owners: $owners) {
      ${inventoryFields}
    }
  }
`, { id: demoInventory._id, owners: [demoInventory.creator] }));

