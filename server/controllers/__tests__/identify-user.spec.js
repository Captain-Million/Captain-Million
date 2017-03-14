import test from 'ava';
import mongoose from 'mongoose';
import config from '../../config';
import populateDemoData from '../../../__demo-data/populate-demo-data';
import demoUser from '../../../__demo-data/demo-user';
import User from '../../models/user';
import identifyUser from '../identify-user';

test.before(() => populateDemoData(config.mongoURL));
test.before(() => mongoose.connect(config.mongoURL));

test('identify demo user without creating a new user', t => {
  return identifyUser({ name: demoUser.name })
    .then(user => t.is(user.name, demoUser.name))
    .then(() => User.find({ name: demoUser.name }).exec())
    .then(users => t.is(users.length, 1));
});

test('create a new user if the lookup fail', t => {
  const name = 'Create me';

  return identifyUser({ name })
    .then(user => t.is(user.name, name))
    .then(() => User.find({ name }).exec())
    .then(users => t.is(users.length, 1));
});

test('update lastActivity field of user', t => {
  const now = Date.now();

  return identifyUser({ name: demoUser.name })
    .then(user => t.true(
      user.lastActivity >= now &&
      user.lastActivity <= Date.now()
    ));
});

