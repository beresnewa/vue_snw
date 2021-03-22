<template>
    <div class="profile">
        <div class="wrapper">
            <div class="avatar">
                <img :src="avatar[0]"/>
            </div>
            <div class="wrapperInfo">
                <div class="wrap">
                    <div class="userName">{{ user.name }}</div>
                    <router-link to="/upload" class="buttonEdit">Редактировать профиль</router-link>
                </div>
                <div class="buttons">
                    <div class="count">
                        <span>{{ images.length }}</span>
                        <span>Публикации</span>
                    </div>
                    <div class="count">
                        <span>{{ followers.length }}</span>
                        <button @click="openModalFollowers()">Подписчики</button>
                    </div>
                    <div class="count">
                        <span>{{ subscriptions.length }}</span>
                        <button @click="openModalSubscriptions()">Подписки</button>
                    </div>
                </div>
            </div>
            <followers v-if="modalFollowers" />
            <subscriptions v-if="modalSubscriptions" />

        </div>
        <div class="wrapperPhoto">
            <div class="userPublications">
                <div v-for="(image, index) in images" :key="index">
                    <div class="wrapImg">
                        <img :src="image"/>
                        <button class="delete" @click="deletePhoto({ indexImage: index })">X</button>
                    </div>   
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Followers from '../followers/Followers';
import Subscriptions from '../followers/Subscriptions';

export default {
    data() {
        return {
            
        }
    },
    components: {
        Followers,
        Subscriptions
    },
    computed: {
        ...mapGetters(["user", "images", "avatar"]),  
        ...mapGetters("usersState", ["modalFollowers", "modalSubscriptions", "followers", "subscriptions"]),  
    },
    methods: {
        ...mapActions("usersState", ["openModalFollowers", "openModalSubscriptions", "getFollowers"]),
        ...mapActions("uploadState", ["deletePhoto"])
    },
    created() {
        this.getFollowers()
    }
}

</script>

<style scoped>
    .profile {
        margin-top: 100px;
    }
    .wrapper {
        z-index: 0;
        margin: 20px;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .wrapperInfo{
        margin: 0 20px 0 20px;
        display: flex;
        justify-content: start;
        flex-direction: column;
    }
    .userName {
        font-weight: bold;
    }
    .wrap {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }
    .buttonEdit {
        margin-left: 10px;
        background-color: white;
        cursor: pointer;
        outline: none;
        border: 1px solid rgba(var(--ca6,219,219,219),1);
        border-radius: 4px;
        padding: 5px 9px;
    }
    /* .avatar {
        width: 200px;
        height: 200px;
        padding: 10px;
    } */
    .avatar img {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        object-fit: cover;
    }
    .count {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        padding: 10px;
    }
    .count * {
        font-size: 15px;
    }
    .buttons{
        list-style-type: none;
        padding: 30px 0px 30px 0px;
        display: flex;
        justify-content: start;
        flex-direction: row;
    }
    .buttons button {
        border: 0;
        background-color: white;
        cursor: pointer;
        outline: none;
        padding: 0 10px 0 0px;
    }

    a {
        text-decoration: none;
        color:black;
    }

    .wrapperPhoto{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .userPublications {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 700px;
    }
    .userPublications img {
        width: 200px;
        height: 200px;
        padding: 10px;
    }
    .wrapImg{
        position: relative;
    }
    .delete{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        outline: none;
        border: 0;
        color: black;
        background: rgba(0, 0, 0, 0);
        
    }
    
</style>