import { gql } from "apollo-server-express";
import PostModel from "../../db/models/post";

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    content: String
    user: User
  }

  extend type Query {
    posts: [Post]
    post(title: String!): Post
  }

  extend type Mutation {
    createPost(title: String!, content: String!): Post
  }
`;

const resolvers = {
  Post: {
    user: post => {
      return {};
    }
  },

  Query: {
    posts: async () => {
      return await PostModel.find();
    },
    post: async (_, { title }) => {
      return await UserModel.findOne({ title });
    }
  },

  Mutation: {
    createPost: async (_, { title, content }) => {
      const post = await new PostModel({ title, content }).save();
      return post;
    }
  }
};

export default {
  typeDefs,
  resolvers
};
