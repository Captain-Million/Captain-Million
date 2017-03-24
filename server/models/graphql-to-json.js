import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import { schema } from './graphql';

const schemaPath = path.join(__dirname, './graphql');

graphql(schema, introspectionQuery).then((result) => {
  fs.writeFileSync(
    `${schemaPath}.json`,
    JSON.stringify(result, null, 2)
  );
});

fs.writeFileSync(
  `${schemaPath}.graphql`,
  printSchema(schema)
);

