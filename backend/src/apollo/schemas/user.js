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
`;

const resolvers = {
  Query: {
    users: async () => {
      return await UserModel.find();
    }
  }
};

export default {
  typeDefs,
  resolvers
};
