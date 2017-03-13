import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  registerDate: { type: Date, default: Date.now },

  // TODO: integrate authentication and other necessary details
});

export default mongoose.model('User', userSchema, 'users');
