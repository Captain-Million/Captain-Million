import mongoose from 'mongoose';
import demoUser from './demo-user';
import demoInventory from './demo-inventory';
import User from '../server/models/user';
import Inventory from '../server/models/inventory';
import config from '../server/config';

mongoose.Promise = global.Promise;

function populateDemoData(mongoURL = config.mongoURL) {
  return mongoose.connect(mongoURL)
    .then(() => global.Promise.all([
      User.remove({}),
      Inventory.remove({}),
    ]))
    .then(() => global.Promise.all([
      User.create(demoUser),
      Inventory.create(demoInventory),
    ]))
    .then(() => console.log(`Successfully populated database with demo data at ${mongoURL}`))
    .catch(err => console.error(`Fail to populate database: ${err}`))
    .then(() => mongoose.disconnect());
}

export default populateDemoData;

