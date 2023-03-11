<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="d-flex align-items-center text-dark text-decoration-none"
    >
      <code class="text-dark rounded border fs-4 p-2 shadow">Sammi</code>
    </RouterLink>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink
        :to="{ name: 'login' }"
        class="me-3 py-2 text-dark text-decoration-none fs-5"
      >
        Login
      </RouterLink>
      <RouterLink
        :to="{ name: 'register' }"
        class="me-3 py-2 text-dark text-decoration-none fs-5"
      >
        Register
      </RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>

<!-- 
  <img :src="logo" alt="logo" class="w-25" @click ="toHomeHandler" />
  import { logo } from "../constants/index.js";
  data() {
    return {
      logo,
    };
  },
  methods: {
    toHomeHandler() {
      return this.$router.push("/");
    },
  },
-->
