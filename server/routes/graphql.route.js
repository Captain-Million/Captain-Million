import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema, rootValue } from '../models/graphql';
import demoUser from '../../__demo-data/demo-user';

const router = new express.Router();

// set user as demo user in order to access some demo data
// TODO: remove this after we have authentication
router.use((req, res, next) => {
  if (!req.user) Object.assign(req, { user: demoUser });
  next();
});

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV === 'development',
}));

export default router;

