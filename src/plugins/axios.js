import axios from 'axios';
// import authState from '../store/authState';

function setIterceptors(store) {
    axios.defaults.baseURL = "http://localhost:3000/"

    axios.interceptors.request.use(
        function(config) {
            const token = store.getters['authState/token'];
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        }
    )
}

export default function SettingAxios(store) {
    setIterceptors(store)
    store.axios = axios
}