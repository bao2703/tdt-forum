import { AuthenticationError } from "apollo-server-express";
import { gql } from "apollo-server-express";
import UserModel from "../../db/models/user";

const typeDefs = gql`
  extend type Mutation {
    login(username: String!, password: String!): User
    register(username: String!, password: String!): User
  }
`;

const resolvers = {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await UserModel.findOne({ username, password });
      if (!user) throw new AuthenticationError();
      return user.username;
    },
    register: async (_, { username, password }) => {
      const user = await new UserModel({ username, password }).save();
      return user;
    }
  }
};

export default {
  typeDefs,
  resolvers
};
