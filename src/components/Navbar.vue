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

    <nav class="d-inline-flex align-items-center mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLoggedIn">
        <RouterLink
          :to="{ name: 'home' }"
          class="me-3 py-2 text-dark text-decoration-none fs-5"
        >
          {{ user.username }}
        </RouterLink>
      </template>

      <template v-if="isAnonymous">
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
      </template>
    </nav>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { gettersTypes } from "../modules/types";

export default {
  name: "Navbar",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    /*  ...mapState({
      user: (state) => state.auth.user,
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }), */
    ...mapGetters({
      currentUser: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggedIn,
      isAnonymous: gettersTypes.isAnonymous,
    }),
   /*  currentUser() {
      return this.$store.getters[gettersTypes.currentUser];
    },
    isLoggedIn() {
      return this.$store.getters[gettersTypes.isLoggedIn];
    },
    isAnonymous() {
      return this.$store.getters[gettersTypes.isAnonymous];
    }, */
  },
  methods: {},
};
</script>

<style></style>
