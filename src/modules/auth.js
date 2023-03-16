import AuthService from "../service/auth";
import { setItem } from "../helpers/persistanceStorage";

const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn: null,
  // isLoggedIn ni null, true, false qiymatlari bo'ladi
};

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

export default { state, mutations, actions };
