<template>
  <!-- <the-navigation :auth="auth"></the-navigation> -->
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
// import { mapGetters } from 'vuex'; 

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      activePage: "userProfile",
    };
  },
  computed: {
        // ...mapGetters("authState", ["auth"]),
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
