<template>
    <section>
        <div :style="image" class="background"></div>
        <div class="wrap">
            <h1>Upload file</h1>
            <form @submit.prevent="uploadPhoto(file)" enctype="multipart/form-data">
                <label>Photo</label><br>
                <input type="file" name="filedata" ref="file" @change="handleFileUpload()" />
                <input type="submit" value="Send" />
            </form>
            <br><br>
            <form @submit.prevent="uploadAvatar(avatar)" enctype="multipart/form-data">
                <label>Avatar</label><br>
                <input type="file" name="filedata" ref="avatar" @change="handleAvatarUpload()" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex'; 
export default {
    data(){
      return {
        file: {},
        avatar: {},
        image: { backgroundImage: "url(/static/images/IMG_6117.JPG)"}
      }
    },
    methods: {
        ...mapActions("uploadState", ["uploadPhoto", "uploadAvatar"]),

        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        handleAvatarUpload(){
            this.avatar = this.$refs.avatar.files[0];
        }
    }
}
</script>

<style scoped>
    .background {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-position-y: bottom;
        filter: blur(2px);
    }
    .wrap h1 {
        text-align: center;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 300px;
        width: 400px;
        background-color: rgb(255, 255, 255);
        padding: 20px;
        box-shadow:0 0 10px rgba(82, 81, 81, 0.712);
        /* backdrop-filter: blur(10px); */
    }
    
</style>
