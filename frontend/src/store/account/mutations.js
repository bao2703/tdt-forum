export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export default {
  [LOGIN](state, payload) {
    state.login = true;
  },
  [REGISTER](state, payload) {}
};
