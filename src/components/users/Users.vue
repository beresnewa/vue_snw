<template>
  <div class="wrap">
    <div class="sort">
      <input value="age" v-model="valuesSort" name="age" type="checkbox" @change="getUsers({ sort: valuesSort, currentPage: 1, currentLimit: limit })"/>
      <label for="age">Sort by age</label>
    </div>
    <input type="text" v-model="valueFilter" @change="getUsers({ filter: valueFilter, currentPage: 1, currentLimit: limit, sort: valuesSort })" placeholder="поиск" class="search"/>
    <div v-for="(userS, index) in users"
      :key="userS._id"
      :id="index"
      class="blockWrap"> 
      <div class="avatar" v-for="(avatar, index) in userS.avatars"
        :key="index"
        :id="index">
        <img :src="avatar"/>
      </div>
      <div class="info">
        <span>{{ userS.name }}</span>
        <span>age: {{ userS.age }}</span>
      </div>
      <button v-if="userS.followers.includes(user._id)" class="addButton">Вы подписаны</button>
      <button v-else @click="addFollowers(userS._id)" class="addButton">Подписаться</button>
    </div>
    <pagination />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from './Pagination.vue';

export default {
  data() {
    return {
      valueFilter: '',
      valuesSort: [],
    }
  },
  components: {
    Pagination
  },
  computed: {
    ...mapGetters("usersState", ["users", "page", "limit", "valueButton"]),
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions("usersState", ["getUsers", "addFollowers", "getFilteredUsers"]),
  },
  created() {
    if(this.users.length === 0 ){
      this.getUsers({ currentPage: this.page, currentLimit: this.limit, sort: this.valuesSort })
    }
    
  },
}
</script>

<style scoped>
  .sort {
    margin: 10px;
  }

  .checkbox {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin: 30px;
  }
  .checkbox input {
    margin-left: 10px;
  }
  .wrap {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  .blockWrap {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 400px;
  }
  .avatar {
    margin: 20px;
  }
  .avatar img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: fill;
  }
  .addButton {
    margin-left: 10px;
    background-color: white;
    cursor: pointer;
    outline: none;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    border-radius: 4px;
    padding: 5px 9px;
    height: 30px;
    overflow: hidden;
  }
  .search {
    height: 25px;
    width: 200px;
  }
  .info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin: 0 20px 0 20px;
  }
  
</style>