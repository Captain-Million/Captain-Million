import mongoose from 'mongoose';

mongoose.Promise = Promise;

const isNotEmpty = arr => (arr.length > 0);

const inventorySchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  owners: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }],
    required: true,
    validate: { validator: isNotEmpty, message: 'There is no owner.' },
  },

  products: {
    type: [{
      name: { type: String, required: true, trim: true },
      quantity: { type: Number, default: 0, min: 0 },
    }],
    default: [],
  },

  documents: {
    type: [{
      act: { type: String, enum: ['arrival', 'dispatch', 'inventory'] },
      content: {
        type: [{
          name: { type: String, required: true, trim: true },
          quantity: { type: Number, required: true },
        }],
        required: true,
        validate: { validator: isNotEmpty, message: 'Document is empty.' },
      },
      lastEdit: {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        date: { type: Date, default: Date.now },
      },
      createDate: { type: Date, default: Date.now },
      title: { type: String, trim: true, default: 'Untitled' },
    }],
    default: [],
  },
});

export default mongoose.model('Inventory', inventorySchema, 'inventories');

