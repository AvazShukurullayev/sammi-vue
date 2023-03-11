<template>
  <div class="home-view">
    <h2>Home view: {{ counter }}</h2>
    <div class="w-25">
      <Button class="m-3 btn-success" @click="incrementHandler"
        >Increase</Button
      >
      <Button class="m-3 btn-danger" @click="decrementHandler">Decrease</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    incrementHandler() {
      this.$store.commit("increment");
    },
    decrementHandler() {
      this.$store.commit("decrement");
    },
  },
  computed: {
    counter() {
     return this.$store.state.count;
    },
  },
};
</script>

<style></style>
