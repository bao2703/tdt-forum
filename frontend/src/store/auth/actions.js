import apollo from "@/apollo";

import { LOGIN, REGISTER } from "./mutations";

export const Actions = {
  LOGIN: "Login",
  REGISTER: "Register"
};

export default {
  async [Actions.LOGIN]({ commit }, { username, password }) {
    const { data } = await apollo.mutate({
      mutation: require("@/apollo/graphql/login.gql"),
      variables: { username, password }
    });
    commit(LOGIN, data.login);
  },

  async [Actions.REGISTER]({ commit }, { username, password }) {
    await apollo.mutate({
      mutation: require("@/apollo/graphql/register.gql"),
      variables: { username, password }
    });

    commit(REGISTER);
  }
};
