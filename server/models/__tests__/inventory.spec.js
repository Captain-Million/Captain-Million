import test from 'ava';
import mongoose from 'mongoose';
import Inventory from '../inventory';
import config from '../../config';

mongoose.Promise = Promise;

test.before(() => mongoose.connect(config.mongoURL));

test.beforeEach(() => Inventory.remove({}));

const owners = ['58c6b51d7ecdf50770494ba7'];
const products = [{ name: 'foo', quantity: 42 }];

/*
test('Inventory has an owners array', t => {
  return Inventory.create({ owners })
    .then(inventory => t.deepEqual(
      inventory.owners.map(owner => owner.toString()),
      owners,
    ));
});

test('Inventory cannot be created without any owners', t => {
  t.throws(Inventory.create({ owners: [] }));
});
*/

test('Inventory can be created with a products array', () => {
  return Inventory.create({ owners, products });
});

/*
test('Name is required in product array', t => {
  t.throws(Inventory.create({ owners, products: [{ quantity: 42 }] }));
});
*/

