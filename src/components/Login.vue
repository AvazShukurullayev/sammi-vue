<template>
  <main class="form-signin text-center w-25 m-auto mt-5">
    <form @submit.prevent>
      <h2>
        <code class="text-dark rounded border fs-3 p-2 shadow">Sammi</code>
      </h2>
      <h1 class="h3 my-4 fw-normal">Login</h1>

      <ValidationError
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />
      <Input
        :type="'email'"
        :inputId="'floatingInput'"
        :placeholder="'name@example.com'"
        :label="'Email address'"
        v-model="email"
        required
      />
      <Input
        class="my-3"
        :type="'password'"
        :inputId="'floatingPassword'"
        :placeholder="'Password'"
        :label="'Password'"
        v-model="password"
        required
      />

      <Button type="submit" :disabled="isLoading" @click="submitHandler">
        Login
      </Button>
    </form>
  </main>
</template>

<script>
// vuex dan mapState
import { mapState } from "vuex";

import ValidationError from "./ValidationError.vue";
export default {
  name: "Login",
  components: { ValidationError },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.errors,
    }),
    // isLoading() {
    //   return this.$store.state.auth.isLoading;
    // },
    // validationErrors() {
    //   return this.$store.state.auth.errors;
    // },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then((response) => {
          console.log("Login dispatch then => ", response);
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log("Login dispatch catch => ", err));
    },
  },
};
</script>

<style></style>
