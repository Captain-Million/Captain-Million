import mongoose from 'mongoose';
import test from 'ava';
import User from '../user';
import serverConfig from '../../config';

mongoose.Promise = Promise;

test.before(() => mongoose.connect(serverConfig.mongoURL));

test.beforeEach(() => User.remove({}));

test('User can be created with a name', () => {
  return User.create({ name: 'John Doe' });
});

test('registerDate is set correctly for a new user', t => {
  const now = Date.now();

  return User.create({ name: 'Foo Bar' })
    .then(user => t.true(
      user.registerDate >= now &&
      user.registerDate <= Date.now()
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

