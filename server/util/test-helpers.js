import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

export function connectDB(t, done) {
  mockgoose(mongoose).then(() => {
    mongoose.createConnection('mongodb://localhost:27017/wms-proj', (err) => {
      if (err) t.fail('Unable to connect to test database');
      done();
    });
  });
}

export function dropDB(t) {
  mockgoose.reset((err) => {
    if (err) t.fail('Unable to reset test database');
  });
}

export function expectValidationError(Model, params) {
  return async (t) => {
    const model = new Model(params);
    try {
      await model.validate();
      t.fail('It should throw ValidationError');
    } catch (err) {
      t.regex(err.name, /validation\s*error/i);
    }
  };
}
