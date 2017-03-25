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

test.before(async () => {
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

function testGraphQLWith(query, variables = {}) {
  return t => request.post('/graphql')
    .send({ query, variables })
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-type', /json/)
    .then((res) => {
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
  creator {
    _id
    name
  }
  owners {
    _id
    name
  }
  products {
    _id
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
      user {
        name
        _id
      }
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
      inventories {
        ${inventoryFields}
      }
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
  mutation CreateInventory($input: CreateInventoryInput!) {
    createInventory(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, { input: {} }));

test('deleteDocument', testGraphQLWith(`
  mutation DeleteDocument($input: DeleteDocumentInput!) {
    deleteDocument(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, { input: { documentID: demoInventory.documents[2]._id } }));

const docToEdit = Object.assign(
  {},
  demoInventory.documents[1],
  { content: [{ name: 'HP ProBook', quantity: 99 }] },
);
test('editDocument', testGraphQLWith(`
  mutation editDocument($input: EditDocumentInput!) {
    editDocument(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, { input: { doc: docToEdit } }));

test('editProduct', testGraphQLWith(`
  mutation editProduct($input: EditProductInput!) {
    editProduct(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, {
  input: {
    productName: demoInventory.products[0].name,
    inventoryID: demoInventory._id,
    updates: { name: demoInventory.products[0].name },
  },
}));

const editedProductNames = [
  demoInventory.products[0].name,
  'OOPS, DELETED EVERYTHING ELSE',
];
test('editProductList', testGraphQLWith(`
  mutation editProductList($input: EditProductListInput!) {
    editProductList(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, { input: { editedProductNames, inventoryID: demoInventory._id } }));

const newDoc = {
  act: 'arrival',
  content: [{
    name: demoInventory.products[0].name,
    quantity: 42,
  }],
  title: 'An awesome new doc',
};
test('makeDocument', testGraphQLWith(`
  mutation makeDocument($input: MakeDocumentInput!) {
    makeDocument(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, { input: { doc: newDoc, inventoryID: demoInventory._id } }));

test('updateOwners', testGraphQLWith(`
  mutation updateOwners($input: UpdateOwnersInput!) {
    updateOwners(input: $input) {
      inventory {
        ${inventoryFields}
      }
    }
  }
`, {
  input: {
    inventoryID: demoInventory._id,
    owners: [demoInventory.creator],
  },
}));

