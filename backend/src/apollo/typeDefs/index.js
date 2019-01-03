import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Author {
    id: Int!
    name: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    votes: Int
    author: Author
  }

  type Query {
    posts: [Post]
    authors: [Author]
    author(id: Int!): Author
  },

  type Mutation {
    createAuthor(name: String!): Author!
  }
`;

export default typeDefs;
