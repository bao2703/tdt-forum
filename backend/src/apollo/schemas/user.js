import { gql } from 'apollo-server-express';
import UserModel from '../../db/models/user';

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createUser(username: String!, password: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      return await UserModel.find();
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
