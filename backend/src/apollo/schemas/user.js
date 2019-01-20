import { gql } from 'apollo-server-express';
import UserModel from '../../db/models/user';

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
    posts: [Post]
  }

  extend type Query {
    users: [User]
    user(username: String!): User
  }

  extend type Mutation {
    createUser(username: String!, password: String!): User
  }
`;

const resolvers = {
  User: {
    posts: user => {
      return [];
    }
  },

  Query: {
    users: async () => {
      return await UserModel.find();
    },
    user: async (_, { username }) => {
      return await UserModel.findOne({ username });
    }
  },

  Mutation: {
    createUser: async (_, { username, password }) => {
      const user = await new UserModel({ username, password }).save();
      return user;
    }
  }
};

export default {
  typeDefs,
  resolvers
};
