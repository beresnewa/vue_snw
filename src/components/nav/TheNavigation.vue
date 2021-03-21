<template>
  <header>
    <nav>
      <ul>
        <li v-if="token">
          <router-link to="/users">Users</router-link>
          <router-link to="/profile">Profile</router-link>
          <a @click="logout()" to="/login">Logout</a>
        </li>
        <li v-else> 
          <router-link to="/registration">Registration</router-link>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 

export default {
  computed: {
    ...mapGetters("authState", ["token"]),
  },
  methods: {
    ...mapActions("authState", ["logout"]),
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #bababb;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: rgb(0, 0, 0);
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-active {
  color: #000000;
  border-color: #080808;
  background-color: #8e8d92;
}
</style>
