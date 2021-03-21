import { createStore } from 'vuex';

import authState from './authState';
import usersState from './usersState';
import uploadState from './uploadState';

export default createStore({
    modules: {
        authState,
        usersState,
        uploadState
    },
    state() {
        return {
            user : {},   
        }
    },
    mutations: {
        userUpdateByLogin(state, userData){
            state.user = userData
        },
        userUpdateByReg(state, userData){
            state.user = userData
        },
        userUpdateByUpload(state, userData){
            state.user = userData
        },
        userUpdateBydeletePhoto(state, userData) {
            state.user = userData
        },
        userUpdateByAddFollowers(state, userData) {
            state.user = userData
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        images(state) {
            return state.user.images
        },
        avatar(state) {
            return state.user.avatars
        },

    }
})



