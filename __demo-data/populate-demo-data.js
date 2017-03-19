import mongoose from 'mongoose';
import demoUser from './demo-user';
import demoInventory from './demo-inventory';
import User from '../server/models/user';
import Inventory from '../server/models/inventory';
import config from '../server/config';

mongoose.Promise = global.Promise;

// this can be run in the command line using postinstall.js
/* eslint-disable no-console */
function populateDemoData(mongoURL = config.mongoURL) {
  const shouldHandleConnect = mongoose.connection.readyState !== 1;

  return Promise.resolve(shouldHandleConnect && mongoose.connect(mongoURL))
    .then(() => global.Promise.all([
      User.remove({}),
      Inventory.remove({}),
    ]))
    .then(() => global.Promise.all([
      User.create(demoUser),
      Inventory.create(demoInventory),
    ]))
    .then(() => console.log(`Successfully populated database with demo data at mongodb://${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`))
    .catch(err => console.error(`Fail to populate database: ${err}`))
    .then(() => shouldHandleConnect && mongoose.disconnect());
}

export default populateDemoData;

