<template>
    <section class="upload" :style="image">
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
    .upload {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-position-y: bottom;
    }
    .wrap h1 {
        text-align: center;
    }
    .wrap {
        height: 220px;
        background-color: white;
        margin-top: 50px;
    }
    
</style>
