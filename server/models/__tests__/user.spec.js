import mongoose from 'mongoose';
import test from 'ava';
import User from '../user';
import serverConfig from '../../config';

mongoose.Promise = Promise;

test.before(() => mongoose.connect(serverConfig.mongoURL));

test.beforeEach(() => User.remove({}));

test('User has a name', t => {
  const name = 'John Doe';
  return User.create({ name })
    .then(user => t.is(user.name, name));
});

test('registerDate and lastActivity set correctly for a new user', t => {
  const now = Date.now();

  return User.create({ name: 'Foo Bar' })
    .then(user => t.true(
      user.registerDate >= now &&
      user.registerDate <= Date.now() &&
      user.lastActivity >= now &&
      user.lastActivity <= Date.now()
    ));
});

test('User name is trimmed', t => {
  const name = 'I am awesome';

  return User.create({ name: `  ${name}  ` })
    .then(user => t.is(user.name, name));
});

test('User cannot be created without a name', t => {
  t.throws(User.create({ foo: 'bar' }));
});

