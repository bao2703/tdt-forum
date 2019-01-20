import { ApolloServer, gql } from "apollo-server-express";
import post from "./schemas/post";
import user from "./schemas/user";

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
  typeDefs: [rootTypeDefs, post.typeDefs, user.typeDefs],
  resolvers: [rootResolvers, post.resolvers, user.resolvers]
});

export default apollo;
