import AuthService from "../service/auth";
import { setItem } from "../helpers/persistanceStorage";
import { gettersTypes } from "./types";

// ? State
const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn: null,
  // isLoggedIn ni null, true, false qiymatlari bo'ladi
};

// ? Getters
const getters = {
  [gettersTypes.currentUser]: (state) => {
    return state.user;
  },
  [gettersTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn);
  },
  [gettersTypes.isAnonymous]: (state) => {
    return state.isLoggedIn === false;
  },
  /*  currentUser: (state) => {
    return state.user;
  }, */
};

// ? Mutations
const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
    state.isLoggedIn = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    console.log("payload registerSuccess => ", payload);
    state.user = payload;
    state.isLoggedIn = true;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    console.log("payload registerFailure => ", payload);
    state.errors = payload.errors;
    state.isLoggedIn = false;
  },
  loginStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  loginSuccess(state, payload) {
    state.isLoading = false;
    console.log("payload LoginSuccess => ", payload);
    state.user = payload;
    state.isLoggedIn = true;
  },
  loginFailure(state, payload) {
    state.isLoading = false;
    console.log("payload LoginFailure => ", payload);
    state.errors = payload.errors;
    state.isLoggedIn = false;
  },
};

// ? Actions
const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          console.log("Register response", response.data.user);
          context.commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          // window.localStorage.setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          console.log("Register error", error.response.data);
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("loginStart");
      AuthService.login(user)
        .then((response) => {
          console.log("Login response => ", response);
          context.commit("loginSuccess", response.data.user);
          setItem("token", response.data.user.token);
          // window.localStorage.setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          console.log("Login Error => ", error.response.data);
          context.commit("loginFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
