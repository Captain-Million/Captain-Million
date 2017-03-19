import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import test from 'ava';
import User from '../user';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => User.remove({}));
test.after.always(() => mongoose.disconnect());

test('User has a name', async (t) => {
  const name = 'John Doe';
  const user = await User.create({ name });
  t.is(user.name, name);
});

test('registerDate/lastActivity set for a new user', async (t) => {
  const now = Date.now();
  const user = await User.create({ name: 'Foo Bar' });
  t.true(user.registerDate >= now);
  t.true(user.registerDate <= Date.now());
  t.true(user.lastActivity >= now);
  t.true(user.lastActivity <= Date.now());
});

test('User name is trimmed', async (t) => {
  const name = 'I am awesome';
  const user = await User.create({ name: `  ${name}  ` });
  t.is(user.name, name);
});

test('User cannot be created without a name', (t) => {
  t.throws(User.create({ foo: 'bar' }));
});

