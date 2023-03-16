<template>
  <h4>Validation Error</h4>
</template>

<script>
export default {
  name: "ValidationError",
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
    },
  mounted() {
      console.log(this.validationErrors);
  }
};
</script>

<style></style>
