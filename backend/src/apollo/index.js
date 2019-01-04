import { ApolloServer, gql } from 'apollo-server-express';
import author from './schemas/author';
import post from './schemas/post';

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const rootResolvers = {};

const apollo = new ApolloServer({
  typeDefs: [rootTypeDefs, author.typeDefs, post.typeDefs],
  resolvers: [rootResolvers, author.resolvers, post.resolvers]
});

export default apollo;
