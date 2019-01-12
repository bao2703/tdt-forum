import { gql } from 'apollo-server-express';
import { authors, posts } from '../../data';

const typeDefs = gql`
  type Post {
    id: Int!
    title: String
    votes: Int
    author: Author
  }

  extend type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Post: {
    author: post => authors.find(a => a.id === post.authorId)
  },

  Query: {
    posts: () => posts
  }
};

export default {
  typeDefs,
  resolvers
};
