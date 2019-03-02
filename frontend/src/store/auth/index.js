import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  user: null,
  isLoggedIn: false
};

export default {
  state,
  getters,
  mutations,
  actions
};
