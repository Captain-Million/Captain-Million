import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema, rootValue } from '../models/graphql';
import identifyUser from '../controllers/identify-user';

const router = new express.Router();

// fake authentication logic that identifies all users as demo user
// TODO: remove this after we have real authentication
router.use((req, res, next) => {
  identifyUser({ name: 'Demo User' })
    .then((demoUser) => {
      Object.assign(req, { user: demoUser });
      next();
    });
});

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV === 'development',
}));

export default router;

