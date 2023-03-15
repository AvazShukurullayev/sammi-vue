import AuthService from "../service/auth";
import { setItem } from "../helpers/persistanceStorage";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    console.log("payload registerSuccess => ", payload);
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    console.log("payload registerFailure => ", payload);
    state.errors = payload;
  },
};

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          console.log("Response", response.data.user);
          context.commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          // window.localStorage.setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          console.log("Error", error.response.data);
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};

export default { state, mutations, actions };
