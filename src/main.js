import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router/index';
import SettingAxios from './plugins/axios';



const app = createApp(App);
SettingAxios(store)


app


.use(router)
.use(store)
.mount('#app');
