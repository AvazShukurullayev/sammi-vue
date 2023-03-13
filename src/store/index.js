import { createStore } from "vuex";
import auth from "../modules/auth";
import profile from "../modules/profile";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, profile },
});

export default store;
