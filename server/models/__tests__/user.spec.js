import mongoose from 'mongoose';
import test from 'ava';
import User from '../user';

mongoose.Promise = global.Promise;

test('User has a name', (t) => {
  const name = 'John Doe';
  const user = new User({ name });
  t.is(user.name, name);
});

test('registerDate/lastActivity set for a new user', (t) => {
  const now = Date.now();
  const user = new User({ name: 'Foo Bar' });
  t.true(user.registerDate >= now);
  t.true(user.registerDate <= Date.now());
  t.true(user.lastActivity >= now);
  t.true(user.lastActivity <= Date.now());
});

test('User name is trimmed', (t) => {
  const name = 'I am awesome';
  const user = new User({ name: `  ${name}  ` });
  t.is(user.name, name);
});

test('User cannot be created without a name', (t) => {
  t.throws(User.create({ foo: 'bar' }));
});
