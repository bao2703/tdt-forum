import { gql } from 'apollo-server-express';
import { authors, posts } from '../../data';

let authorNextId = 4;

const typeDefs = gql`
  type Author {
    id: Int!
    name: String
    posts: [Post]
  }

  extend type Query {
    authors: [Author]
    author(id: Int!): Author
  }

  extend type Mutation {
    createAuthor(name: String!): Author!
  }
`;

const resolvers = {
  Author: {
    posts: author => posts.filter(p => p.authorId === author.id)
  },

  Query: {
    authors: () => authors,
    author: (_, { id }) => authors.find(a => a.id === id)
  },

  Mutation: {
    createAuthor: (_, { name }) => {
      const newAuthor = { id: authorNextId++, name };
      authors.push(newAuthor);
      return newAuthor;
    }
  }
};

export default { typeDefs, resolvers };
