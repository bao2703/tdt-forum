import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const home = () => import("@/components/home/Home.vue");

const auth = () => import("@/components/auth/Auth.vue");
const login = () => import("@/components/auth/login/Login.vue");
const register = () => import("@/components/auth/register/Register.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: home },
    {
      path: "/auth",
      component: auth,
      redirect: { name: "login" },
      children: [
        { path: "login", name: "login", component: login },
        { path: "register", name: "register", component: register }
      ]
    }
  ]
});
