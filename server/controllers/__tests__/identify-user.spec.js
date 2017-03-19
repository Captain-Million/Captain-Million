import test from 'ava';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import User from '../../models/user';
import identifyUser from '../identify-user';
import config from '../../config';

test.before(() => {
  mongoose.Promise = Promise;
  const mockgoose = new Mockgoose(mongoose);

  return mockgoose.prepareStorage()
    .then(() => mongoose.connect(config.mongoURL));
});
test.before(() => populateDemoData());
test.after.always(() => mongoose.disconnect());

test('identify demo user without creating a new user', (t) => {
  return identifyUser({ name: demoUser.name })
    .then(user => t.is(user.name, demoUser.name))
    .then(() => User.find({ name: demoUser.name }).exec())
    .then(users => t.is(users.length, 1));
});

test('create a new user if the lookup fail', (t) => {
  const name = 'Create me';

  return identifyUser({ name })
    .then(user => t.is(user.name, name))
    .then(() => User.find({ name }).exec())
    .then(users => t.is(users.length, 1));
});

test('update lastActivity field of user', (t) => {
  const now = Date.now();

  return identifyUser({ name: demoUser.name })
    .then(user => t.true(
      user.lastActivity >= now &&
      user.lastActivity <= Date.now()
    ));
});

