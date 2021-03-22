<template>
  <div class="modalWrap">
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">Вы подписаны</h3>
        <button class="close" @click="closeModalSubscriptions()">X</button>
      </div>
      <div class="modal-body">
        <div v-for="(subscription, index) in subscriptions"
          :key="subscription._id"
          :id="index"
          class="blockWrap">
          <div class="avatar" v-for="(avatar, index) in subscription.avatars"
            :key="index"
            :id="index">
            <img :src="avatar"/>
          </div>
          {{ subscription.name }}
          <button @click="deleteSubscrption(subscription._id)">Отписаться</button>    
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters("usersState", ["subscriptions"]),   
  },
  methods: {
    ...mapActions("usersState", ["closeModalSubscriptions", "getFollowers", "deleteSubscrption"])
  }
};
</script>
<style scoped>
  .avatar {
    margin: 20px;
  }
  .blockWrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }
  .avatar img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .modalWrap {
    position: fixed;
    background-color: rgba(90, 89, 89, 0.678);
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
  }
  .modal {
    position: absolute;
    z-index: 10;
    transition: opacity 200ms ease-in;
    margin: 0;
    padding: 0;
    height: 400px;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
    overflow: hidden;
  }  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eceeef;
    height: 60px;
  }
  .modal-title {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 500;
  }
  .modal-body {
    padding: 15px;
    overflow-y: auto;
    height: calc(100% - 60px);
  }
  .close {
    cursor: pointer;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
  }
</style>
