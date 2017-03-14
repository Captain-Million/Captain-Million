import test from 'ava';
import mongoose from 'mongoose';
import Inventory from '../inventory';
import config from '../../config';

mongoose.Promise = Promise;

test.before(() => mongoose.connect(config.mongoURL));

test.beforeEach(() => Inventory.remove({}));

const owners = ['58c6b51d7ecdf50770494ba7'];
const products = [{ name: 'foo', quantity: 42 }];

test('Inventory has an owners array', t => {
  return Inventory.create({ owners })
    .then(inventory => {
      const invOwners = inventory.owners.map(owner => owner.toString());
      t.deepEqual(invOwners, owners);
    });
});

test('Inventory cannot be created without owners', t => {
  t.throws(Inventory.create({ owners: [] }));
  t.throws(Inventory.create({}));
});

test('Inventory has a products array', t => {
  return Inventory.create({ owners, products })
    .then(inventory => {
      const invProducts = inventory.products.map(product => {
        const { name, quantity } = product;
        return { name, quantity };
      });
      t.deepEqual(invProducts, products);
    });
});

test('Name is required for a product', t => {
  t.throws(Inventory.create({ owners, products: [{ quantity: 42 }] }));
});

test('Quantity of a product cannot be negative', t => {
  const invalidProduct = { name: 'bar', quantity: -1 };
  t.throws(Inventory.create({ owners, products: [invalidProduct] }));
});

test('Quantity of a product defaults to 0', t => {
  const newProduct = { name: 'new product' };
  return Inventory.create({ owners, products: [newProduct] }).
    then(inventory => t.is(inventory.products[0].quantity, 0));
});

test('Inventory has a documents array', t => {
  const documents = [
    { act: 'arrival', content: products },
    { act: 'dispatch', content: products },
    { act: 'inventory', content: products },
  ];
  return Inventory.create({ owners, documents }).
    then(inventory => {
      const invDocuments = inventory.documents.map(doc => {
        const { act, content } = doc;
        const parsedContent = content.map(prod => {
          const { name, quantity } = prod;
          return { name, quantity };
        });
        return { act, content: parsedContent };
      });

      t.deepEqual(invDocuments, documents);
    });
});

test('act of document must be arrival/dispatch/inventory', t => {
  const invalidDoc = { act: 'Invalid Act', content: products };
  t.throws(Inventory.create({ owners, documents: [invalidDoc] }));
});

test('document cannot have empty content', t => {
  const emptyDoc = { act: 'arrival', content: [] };
  t.throws(Inventory.create({ owners, documents: [emptyDoc] }));
});

