<template>
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
</template>
<script>
import { mapActions } from 'vuex'; 
export default {
    data(){
      return {
        file: {},
        avatar: {}
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