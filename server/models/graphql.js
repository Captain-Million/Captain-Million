import { buildSchema } from 'graphql';
import getInventories from '../controllers/get-inventories';
import createInventory from '../controllers/create-inventory';
import deleteDocument from '../controllers/delete-document';
import editDocument from '../controllers/edit-document';
import editProduct from '../controllers/edit-product';
import editProductList from '../controllers/edit-product-list';
import makeDocument from '../controllers/make-document';
import updateOwners from '../controllers/update-owners';

const schema = buildSchema(`
  type Query {
    me: User
    getInventory(inventoryID: ID!): Inventory
    getMyInventories: Inventories
  }

  type Mutation {
    createInventory(input: CreateInventoryInput!): InventoryPayload
    deleteDocument(input: DeleteDocumentInput!): InventoryPayload
    editDocument(input: EditDocumentInput!): InventoryPayload
    editProduct(input: EditProductInput!): InventoryPayload
    editProductList(input: EditProductListInput!): InventoryPayload
    makeDocument(input: MakeDocumentInput!): InventoryPayload
    updateOwners(input: UpdateOwnersInput!): InventoryPayload
  }

  type User {
    name: String
    _id: ID
    id: ID
  }

  type Inventory {
    _id: ID
    id: ID
    creator: User
    owners: [User]
    products: [Product]
    documents: [Document]
  }

  type Inventories {
    inventories: [Inventory]
  }

  type Product {
    _id: ID
    id: ID
    name: String
    quantity: Float
  }

  input ProductInput {
    _id: ID
    id: ID
    name: String!
    quantity: Float
  }

  type Document {
    _id: ID
    id: ID
    act: Act
    content: [Product]
    title: String
    lastEdit: LastEditInfo
    createDate: String
  }

  input DocumentInput {
    _id: ID
    id: ID
    act: Act!
    content: [ProductInput]!
    title: String
    lastEdit: LastEditInfoInput
    createDate: String
  }

  type LastEditInfo {
    user: User
    date: String
  }

  input LastEditInfoInput {
    user: ID
    date: String
  }

  enum Act {
    arrival
    dispatch
    inventory
  }

  input CreateInventoryInput {
    clientMutationId: String
  }

  input DeleteDocumentInput {
    clientMutationId: String
    documentID: ID!
  }

  input EditDocumentInput {
    clientMutationId: String
    doc: DocumentInput!
  }

  input EditProductInput {
    clientMutationId: String
    inventoryID: ID!
    productName: String!
    updates: ProductInput!
  }

  input EditProductListInput {
    clientMutationId: String
    editedProductNames: [String]!
    inventoryID: ID!
  }

  input MakeDocumentInput {
    clientMutationId: String
    doc: DocumentInput!
    inventoryID: ID!
  }

  input UpdateOwnersInput {
    clientMutationId: String
    owners: [ID]!
    inventoryID: ID!
  }

  type InventoryPayload {
    inventory: Inventory!
    clientMutationId: String!
  }
`);

function createInventoryPayload(clientMutationId) {
  return function insertInventory(inventory) {
    return { inventory, clientMutationId };
  };
}

const rootValue = {
  me(args, req) {
    return req.user;
  },

  getInventory({ inventoryID }, req) {
    return getInventories({ inventoryID, userID: req.user._id });
  },

  getMyInventories(args, req) {
    return { inventories: getInventories({ userID: req.user._id }) };
  },

  createInventory({ input: { clientMutationId } }, req) {
    return createInventory({ userID: req.user._id })
      .then(createInventoryPayload(clientMutationId));
  },

  deleteDocument({ input: { documentID, clientMutationId } }, req) {
    return deleteDocument({ documentID, userID: req.user._id })
      .then(createInventoryPayload(clientMutationId));
  },

  editDocument({ input: { doc, clientMutationId } }, req) {
    return editDocument({ doc, userID: req.user._id })
      .then(createInventoryPayload(clientMutationId));
  },

  editProduct({ input: { productName, inventoryID, updates, clientMutationId } }, req) {
    return editProduct({
      productName,
      inventoryID,
      updates,
      userID: req.user._id,
    }).then(createInventoryPayload(clientMutationId));
  },

  editProductList({ input: { editedProductNames, inventoryID, clientMutationId } }, req) {
    return editProductList({
      editedProductNames,
      inventoryID,
      userID: req.user._id,
    }).then(createInventoryPayload(clientMutationId));
  },

  makeDocument({ input: { doc, inventoryID, clientMutationId } }, req) {
    return makeDocument({ doc, inventoryID, userID: req.user._id })
      .then(createInventoryPayload(clientMutationId));
  },

  updateOwners({ input: { inventoryID, owners, clientMutationId } }, req) {
    return updateOwners({ inventoryID, owners, userID: req.user._id })
      .then(createInventoryPayload(clientMutationId));
  },
};

export { schema, rootValue };

