import { createStore } from 'vuex';

import authState from './authState';

export default createStore({
    modules: {
        authState
    },
    state() {
        return {
            token: localStorage.getItem('token') || '',
        } 
    },
    getters: {
        token (state) {
            return state.token
        }
    }
})

