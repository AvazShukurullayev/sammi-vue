<template>
  <div class="form-floating">
    <input
      class="form-control"
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
    />
    <label :for="inputId">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
      type: String,
      inputId: String,
      placeholder: String,
      label: String,
  },
};
</script>

<style></style>
