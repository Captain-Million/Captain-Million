import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import User from '../../models/user';
import identifyUser from '../identify-user';
import config from '../../config';

test.before(async () => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);
  await mockgoose.prepareStorage();
  await mongoose.connect(config.mongoURL);
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('identify demo user without creating a new user', async (t) => {
  const user = await identifyUser({ name: demoUser.name });
  t.is(user.name, demoUser.name);

  const users = await User.find({ name: demoUser.name }).exec();
  t.is(users.length, 1);
});

test('create a new user if the lookup fail', async (t) => {
  const name = 'Create me';
  const user = await identifyUser({ name });
  t.is(user.name, name);

  const users = await User.find({ name }).exec();
  t.is(users.length, 1);
});

test('update lastActivity field of user', async (t) => {
  const now = Date.now();
  const user = await identifyUser({ name: demoUser.name });
  t.true(user.lastActivity >= now);
  t.true(user.lastActivity <= Date.now());
});

