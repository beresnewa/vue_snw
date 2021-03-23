import { createStore } from 'vuex';

import authState from './authState';
import usersState from './usersState';
import uploadState from './uploadState';
import followerState from './followerState';

export default createStore({
    modules: {
        authState,
        usersState,
        uploadState,
        followerState
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
            if(state.user.images) {
                return state.user.images
            } else {
                return []
            }
        },
        avatar(state) {
            if(state.user.avatars) {
                return state.user.avatars
            } else {
                return []
            }
        },
    }
})



