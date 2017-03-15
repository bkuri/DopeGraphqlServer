import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import rootSchema from './schema/rootSchema';

const bodyParser = require('body-parser');

const GRAPHQL_PORT = 8000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: rootSchema,
}));

if (process.env.NODE_ENV === 'development') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    context: {},
  }));
}

app.listen(GRAPHQL_PORT, () => {
  /* eslint-disable no-console */
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
  );
});
