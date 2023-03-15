<template>
  <div class="form-floating">
    <input
      class="form-control"
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
      @input="updateInput"
      :value="modelValue"
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
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style></style>
