import mongoose from 'mongoose';
import demoUser from './demo-user';
import demoInventory from './demo-inventory';
import User from '../server/models/user';
import Inventory from '../server/models/inventory';
import config from '../server/config';

mongoose.Promise = global.Promise;

function populateDemoData(mongoURL) {
  return mongoose.connect(mongoURL || config.mongoURL)
    .then(() => global.Promise.all([
      User.remove({}),
      Inventory.remove({}),
    ]))
    .then(() => global.Promise.all([
      User.create(demoUser),
      Inventory.create(demoInventory),
    ]))
    .then(() => console.log(`Successfully populated database with demo data at ${config.mongoURL}`))
    .then(() => mongoose.disconnect());
}

export default populateDemoData;

