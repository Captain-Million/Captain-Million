import { buildSchema } from 'graphql';
import getInventories from '../controllers/get-inventories';
import createInventory from '../controllers/create-inventory';
import deleteDocument from '../controllers/delete-document';
import editDocument from '../controllers/edit-document';
import editProductList from '../controllers/edit-product-list';
import makeDocument from '../controllers/make-document';

const schema = buildSchema(`
  type Query {
    me: User
    getInventory(inventoryID: ID!): Inventory
    getMyInventories: [Inventory]
  }

  type Mutation {
    createInventory: Inventory
    deleteDocument(documentID: ID!): Inventory
    editDocument(doc: DocumentInput!): Inventory
    editProductList(editedProductNames: [String]!, inventoryID: ID!): Inventory
    makeDocument(doc: DocumentInput!, inventoryID: ID!): Inventory

  }

  type User {
    name: String
    _id: ID
  }

  type Inventory {
    _id: ID
    owners: [ID]
    products: [Product]
    documents: [Document]
  }

  type Product {
    name: String
    quantity: Float
  }

  input ProductInput {
    name: String
    quantity: Float
  }

  type Document {
    _id: ID
    act: Act
    content: [Product]
    title: String
    lastEdit: LastEditInfo
    createDate: String
  }

  input DocumentInput {
    _id: ID
    act: Act!
    content: [ProductInput]!
    title: String
  }

  type LastEditInfo {
    user: ID
    date: String
  }

  enum Act {
    arrival
    dispatch
    inventory
  }
`);


const rootValue = {
  me(args, req) {
    return req.user;
  },

  getInventory({ inventoryID }) {
    return getInventories({ inventoryID });
  },

  getMyInventories(args, req) {
    return getInventories({ ownerID: req.user._id });
  },

  createInventory(args, req) {
    return createInventory({ userID: req.user._id });
  },

  deleteDocument({ documentID }) {
    return deleteDocument({ documentID });
  },

  editDocument({ doc }, req) {
    return editDocument({ doc, userID: req.user._id });
  },

  editProductList({ editedProductNames, inventoryID }) {
    return editProductList({ editedProductNames, inventoryID });
  },

  makeDocument({ doc, inventoryID }, req) {
    return makeDocument({ doc, inventoryID, userID: req.user._id });
  },
};

export { schema, rootValue };

