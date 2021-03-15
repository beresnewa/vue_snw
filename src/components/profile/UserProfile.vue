<template>
    <div class="profile">
        <div class="wrapper">
            <div class="avatar">
                <img src="/static/images/avatar.jpeg"/>
            </div>
            <div class="wrapperInfo">
                <div class="wrap">
                    <div class="userName">  </div>
                    <button class="buttonEdit">Редактировать профиль</button>
                </div>
                <div class="buttons">
                    <button>Публикации</button>
                    <button>
                        <router-link to="/teams">Подписчики</router-link>
                    </button>
                    <button>Подписки</button>
                </div>
            </div>
        </div>
        <div class="userPublications">
            <!-- <div>Публикации</div> -->
            <div class="wrapperPhoto">
                <img src="/static/images/IMG_1973.jpeg"/>
                <img src="/static/images/IMG_1974.jpeg"/>
                <img src="/static/images/IMG_1975.jpeg"/>
            </div>
        </div>
    </div>   
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("authState", ["user"]),  
    }
}

</script>

<style scoped>
    .profile {
        margin-top: 100px;
    }
    .wrapper {
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

    button a {
        text-decoration: none;
        color:black;
    }
    .wrapperPhoto{
        margin: 20px;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .userPublications img {
        width: 200px;
        height: 200px;
        padding: 10px;
    }
</style>