<template>
  <main class="form-signin text-center w-25 m-auto mt-5">
    <form>
      <h2>
        <code class="text-dark rounded border fs-3 p-2 shadow">Sammi</code>
      </h2>
      <h1 class="h3 my-4 fw-normal">Registration</h1>

      <ValidationError :validationErrors="validationErrors" />
      <Input
        :type="'text'"
        :inputId="'floatingName'"
        :placeholder="'John'"
        :label="'Name'"
        v-model="username"
        required
      />
      <Input
        class="my-3"
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
        Register
      </Button>
    </form>
  </main>
</template>

<script>
import ValidationError from "@/components/ValidationError.vue";

export default {
  name: "Register",
  props: {},
  components: { ValidationError },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
    validationErrors() {
      return this.$store.state.auth.errors;
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
          console.log("USER Register.vue", user);
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log("Error Register.vue", err));
    },
  },
};
</script>

<style></style>

<!-- <button class="w-100 btn btn-lg btn-primary">Register</button> -->
