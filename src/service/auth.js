import axios from "./axios";

const AuthService = {
  register(user) {
    return axios.post("/users", { user:user });
    },
    login(user) {}, 
};

export default AuthService;
