import { GraphQLClient } from 'graphql-request';

const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

export default graphqlClient; 