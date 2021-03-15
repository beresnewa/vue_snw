import { createStore } from 'vuex';

import authState from './authState';

export default createStore({
    modules: {
        authState
    },
})

