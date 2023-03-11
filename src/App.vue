<template>
  <div class="app">
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { Navbar } from "@/components";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
