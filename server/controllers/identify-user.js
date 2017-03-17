import User from '../models/user';

function identifyUser({ name }) {
  // TODO: identify user with something better than name
  // after setting up authentication
  const query = { name };
  const updates = { $set: { lastActivity: new Date() } };
  const options = {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
    runValidators: true,
  };

  return User.findOneAndUpdate(query, updates, options).exec();
}

export default identifyUser;

