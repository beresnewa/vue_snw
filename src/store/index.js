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
        updateUser(state, userData) {
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



