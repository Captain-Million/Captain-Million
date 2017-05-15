import test from 'ava';
import mongoose from 'mongoose';
import Inventory from '../inventory';
import { expectValidationError } from '../../util/test-helpers';

mongoose.Promise = global.Promise;

const owners = ['58c6b51d7ecdf50770494ba7'];
const creator = owners[0];
const products = [{ name: 'foo', quantity: 42 }];

test('Inventory has an owners array', (t) => {
  const inventory = new Inventory({ owners, creator });
  const invOwners = inventory.owners.map(owner => owner.toString());
  t.deepEqual(invOwners, owners);
});

test('Inventory has a default name', (t) => {
  const inventory = new Inventory({ owners, creator });
  t.is(inventory.name, 'My Inventory');
});

test('Inventory has a creator', (t) => {
  const inventory = new Inventory({ owners, creator });
  t.is(inventory.creator.toString(), creator);
});

test(
  'Inventory cannot be created with 0 owners',
  expectValidationError(Inventory, { creator, owners: [] })
);

test(
  'Inventory cannot be created without owners',
  expectValidationError(Inventory, {})
);

test('Inventory has a products array', (t) => {
  const inventory = new Inventory({ owners, products, creator });
  const invProducts = inventory.products.map((product) => {
    const { name, quantity } = product;
    return { name, quantity };
  });
  t.deepEqual(invProducts, products);
});

test(
  'Name is required for a product',
  expectValidationError(Inventory, {
    owners,
    creator,
    products: [{ quantity: 42 }],
  })
);

test(
  'Quantity of a product cannot be negative',
  expectValidationError(Inventory, {
    owners,
    creator,
    products: [{ name: 'bar', quantity: -1 }],
  })
);

test('Quantity of a product defaults to 0', (t) => {
  const inventory = new Inventory({
    owners,
    creator,
    products: [{ name: 'new' }],
  });
  t.is(inventory.products[0].quantity, 0);
});

test('Inventory has a documents array', (t) => {
  const documents = [
    { act: 'arrival', content: products, title: 'my title' },
    { act: 'dispatch', content: products, title: 'my title 2' },
    { act: 'inventory', content: products, title: 'foo bar baz' },
  ];
  const now = Date.now();
  const inventory = new Inventory({ owners, documents, creator });
  const invDocuments = inventory.documents.map((doc) => {
    const { act, content, title, createDate } = doc;
    t.true(createDate >= now);
    t.true(createDate <= Date.now());
    const parsedContent = content.map((prod) => {
      const { name, quantity } = prod;
      return { name, quantity };
    });
    return { act, title, content: parsedContent };
  });

  t.deepEqual(invDocuments, documents);
});

test(
  'act of document must be arrival/dispatch/inventory',
  expectValidationError(Inventory, {
    owners,
    creator,
    documents: [{ act: 'Invalid Act', content: products }],
  })
);

test('document cannot have empty content',
  expectValidationError(Inventory, {
    owners,
    creator,
    documents: [{ act: 'arrival', content: [] }],
  })
);
