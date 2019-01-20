import apollo from "@/apollo";

import { LOGIN, REGISTER } from "./mutations";

export const login = "login";
export const register = "register";

export default {
  async [login]({ commit }, { username, password }) {
    await apollo.query({
      query: require("@/apollo/graphql/login.gql"),
      variables: { username, password }
    });

    commit(LOGIN);
  },

  async [register]({ commit }, { username, password }) {
    await apollo.mutate({
      mutation: require("@/apollo/graphql/register.gql"),
      variables: { username, password }
    });

    commit(REGISTER);
  }
};
