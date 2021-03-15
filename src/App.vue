<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";


import { mapActions, mapGetters } from 'vuex'; 


export default {
  components: {
    TheNavigation,
  },
  computed: {
    ...mapGetters("authState", ["auth"]),
  },
  methods: {
    ...mapActions("authState", ["autologin"])
  },
  created() {
    this.autologin()
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
