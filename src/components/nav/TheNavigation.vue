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
  background: linear-gradient(to bottom, rgba(179,88,239,1) 0%,rgba(81,0,211,1) 49%,rgba(108,0,191,1) 52%,rgba(78,0,147,1) 52%,rgba(224,56,199,1) 100%);
  box-shadow: 0px 0px 15px 0px rgba(224,56,199,1);
  color: rgb(255, 255, 255);
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
  color:white !important;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-size: 18px;
}

a:hover,
a:active,
a.router-link-active {
  color: white;
  border-color: #080808;
  background-color: #ab9af0e8;
}
</style>
