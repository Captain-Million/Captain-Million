import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import User from '../user';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => User.remove({}));
test.after.always(() => mongoose.disconnect());

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

