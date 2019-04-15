import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();

apollo.applyMiddleware({ app });

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(
    `Server started on PORT: ${PORT}`,
    `GraphQL on ${apollo.graphqlPath}`
  );
});

export default app;
