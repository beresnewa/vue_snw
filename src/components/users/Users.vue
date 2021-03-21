<template>
  <div class="wrap">
    <!-- <div class="checkbox"> -->
      <!-- <div>
        <input value="british" v-model="valuesSort" type="checkbox" name="british" />
        <label for="british">Британская</label>
      </div>
      <div>
        <input value="persian" v-model="valuesSort" type="checkbox" name="persian" />
        <label for="persian">Персидская</label>
      </div>
      <div>
        <input value="another" v-model="valuesSort" type="checkbox" name="another" />
        <label for="another">Другая</label>
      </div> -->
      <!-- <button class="sortBtn" @click="getUsers({ sort: valuesSort, currentPage: 1, currentLimit: limit })">Сортировать</button> -->
    <!-- </div> -->
    <div>
      <input value="age" v-model="valuesSort" name="age" type="checkbox" @change="getUsers({ sort: valuesSort, currentPage: 1, currentLimit: limit })"/>
      <label for="age">Sort by age</label>
    </div>
    <input type="text" v-model="valueFilter" @change="getUsers({ filter: valueFilter, currentPage: 1, currentLimit: limit, sort: valuesSort })" placeholder="поиск"/>
    <div v-for="(user, index) in users"
      :key="user._id"
      :id="index"
      class="blockWrap"> 
      <div class="avatar">
        <img src="/static/images/avatar.jpeg"/>
      </div>
      {{ user.name }}
      <button @click="addFollowers(user._id)" class="addButton">Подписаться</button>
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
      valuesSort: []
    }
  },
  components: {
    Pagination
  },
  computed: {
    ...mapGetters("usersState", ["users", "page", "limit"]),
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
  /* .sortBtn {
    margin-left: 10px;
    background-color: white;
    cursor: pointer;
    outline: none;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    border-radius: 4px;
    padding: 5px;
    height: 10px;
  } */
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
  }
  .avatar {
    margin: 20px;
  }
  .avatar img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  button {
    cursor: pointer;
    outline: none;
    padding: 0 10px 0 0px;
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
  }
</style>