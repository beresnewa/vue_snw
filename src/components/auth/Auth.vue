<template>
  <form @submit.prevent="login({ login: loginAuth, password })" class="form-1">
    <p class="field">
        <input required v-model="loginAuth" type="text" name="login" placeholder="login/email">
        <i class="icon-user icon-large"></i>
    </p>
    <p class="field">
        <input required v-model="password" type="password" name="password" placeholder="password">
        <i class="icon-lock icon-large"></i>
    </p>      
    <p class="submit">
        <button type="submit" name="submit"><i class="icon-arrow-right icon-large">SIGN IN</i></button>
    </p>
</form>

</template>

<script>
import { mapActions } from 'vuex'; 

export default {
    
    data() {
        return {
            loginAuth: '',
            password: '',
            
        };
    },
    computed:{
        ...mapActions("authState", ["login"]),
    },
    // created(){
    //     this.login()

        
    // }

}   

</script>

<style scoped>
.form-1 {
    width: 300px;
    margin: 60px auto 30px;
    padding: 10px;
    position: relative; 
    box-shadow:
        0 0 1px rgba(0, 0, 0, 0.3),
        0 3px 7px rgba(0, 0, 0, 0.3),
        inset 0 1px rgba(255,255,255,1),
        inset 0 -3px 2px rgba(0,0,0,0.25);
    border-radius: 5px;
    background: linear-gradient(#eeefef, #ffffff 10%);
} 
.form-1 .field {
    position: relative; 
}
.form-1 .field i {
    left: 0px;
    top: 0px;
    position: absolute;
    height: 36px;
    width: 36px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);
    color: #777777;
    text-align: center;
    line-height: 42px;
    transition: all 0.3s ease-out;
    pointer-events: none;
}
.form-1 input[type=text],
.form-1 input[type=password] {
    font-family: 'Lato', Calibri, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    text-shadow: 0 1px 0 rgba(255,255,255,0.8);
    width: 100%;
    padding: 10px 18px 10px 45px;
    border: none; 
    box-shadow:
        inset 0 0 5px rgba(0,0,0,0.1),
        inset 0 3px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    background: #f9f9f9;
    color: #777;
    transition: color 0.3s ease-out;
}
 
.form-1 input[type=text] {
    margin-bottom: 10px;
}
.form-1 input[type=text]:hover ~ i,
.form-1 input[type=password]:hover ~ i {
    color: #52cfeb;
}
 
.form-1 input[type=text]:focus ~ i,
.form-1 input[type=password]:focus ~ i {
    color: #42A2BC;
}
 
.form-1 input[type=text]:focus,
.form-1 input[type=password]:focus,
.form-1 button[type=submit]:focus {
    outline: none;
}
.form-1 .submit {
    width: 65px;
    height: 65px;
    position: absolute;
    top: 17px;
    right: -25px;
    padding: 10px;
    z-index: 2;
    background: #ffffff;
    border-radius: 50%;
    box-shadow:
        0 0 2px rgba(0,0,0,0.1),
        0 3px 2px rgba(0,0,0,0.1),
        inset 0 -3px 2px rgba(0,0,0,0.2);
}
.form-1 button {
    width: 100%;
    height: 100%;
    margin-top: -1px;
    font-size: 0.5em;
    line-height: 1.75;
    color: white;
    border: none; 
    border-radius: inherit;
    background: linear-gradient(#52cfeb, #42A2BC);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.3),
        0 1px 2px rgba(0,0,0,0.35),
        inset 0 3px 2px rgba(255,255,255,0.2),
        inset 0 -3px 2px rgba(0,0,0,0.1);
    cursor: pointer;
}
</style>
