<template>
  <main class="form-signin text-center w-25 m-auto mt-5">
    <form @submit.prevent>
      <h2>
        <code class="text-dark rounded border fs-3 p-2 shadow">Sammi</code>
      </h2>
      <h1 class="h3 my-4 fw-normal">Registration</h1>

      <Input
        :type="'text'"
        :inputId="'floatingName'"
        :placeholder="'John'"
        :label="'Name'"
      />
      <Input
        class="my-3"
        :type="'email'"
        :inputId="'floatingInput'"
        :placeholder="'name@example.com'"
        :label="'Email address'"
      />
      <Input
        class="my-3"
        :type="'password'"
        :inputId="'floatingPassword'"
        :placeholder="'Password'"
        :label="'Password'"
      />

      <Button type="submit">Register</Button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style></style>

<!-- <button class="w-100 btn btn-lg btn-primary">Register</button> -->
