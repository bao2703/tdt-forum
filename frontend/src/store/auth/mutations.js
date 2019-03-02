export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export default {
  [LOGIN](state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
  [REGISTER](state, payload) {}
};
