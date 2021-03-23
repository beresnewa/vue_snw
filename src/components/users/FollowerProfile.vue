<template>
    <div v-if="isLoading" class="loader">Loading...</div>
    <div v-else class="profile">
        <div class="wrapper">
            <div class="avatar">
                <img :src="followerAvatar[0]"/>
            </div>
            <div class="wrapperInfo">
                <div class="wrap">
                    <div class="userName">{{ follower.name }}</div>
                    <div>Age: {{ follower.age}}</div>
                </div>
                <div class="buttons">
                    <div class="count">
                        <span>{{ followerImagesLength }}</span>
                        <span>Publications</span>
                    </div>
                    <div class="count">
                        <span>{{ followerFollowersLength }}</span>
                        <span>Followers</span>
                    </div>
                    <div class="count">
                        <span>{{ followerSubscriptionsLength }}</span>
                        <span>Subscriptions</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapperPhoto">
            <div class="userPublications">
                <div v-for="(image, index) in followerImages" :key="index">
                    <div class="wrapImg">
                        <img :src="image"/>
                    </div>   
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters("followerState", ["isLoading", "follower", "followerImages", "followerImagesLength", "followerAvatar", "followerSubscriptionsLength", "followerFollowersLength"]),  
    },
    methods: {
        ...mapActions("followerState", ["getFollower"]),
        
    },
    created() {
        this.getFollower()
    }
}
</script>

<style scoped>
    .loader {
        margin-top: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
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
        font-size: 20px;
    }
    .wrap {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 10px;
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
        padding: 20px 0px 20px 0px;
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
        max-width: 800px;
    }
    .userPublications img {
        width: 250px;
        height: 250px;
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