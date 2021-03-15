import router from "../router/index";

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('token') || '',
            auth: false,
            user: {},
            status: ''
        }
    },
    mutations: {
      login(state, userFromRes) { 
        if(state.token) {
          state.auth = true
          state.user = userFromRes
          router.push('/profile')
          console.log(state.user)
        }
      },
      logout(state) {
        if(!state.token) {
          state.auth = false
          router.push('/login')
        }
      },
      reg(state, userFromRes) {
        if(state.token) {
          state.auth = true
          state.user = userFromRes
          router.push('/profile')
        }
      }
    },

    getters: {
      auth(state) {
        return state.auth
      },
      user(state) {
        
        return state.user
      },
      // isAuthenticated: state => !!state.token,
      // authStatus: state => state.status,
    },
    
    actions: {
      async login(context, payload) {
        try {
          const response = await this.axios.post("users/login", payload)
          const token = response.data.token
          const userFromRes = response.data.user 
    
          localStorage.setItem('token', token)
          // this.axios.defaults.headers.common['Authorization'] = token

          context.commit('login', userFromRes)

        } catch(error) {
          alert(`неверный пароль ${error}`)
        }
      },

      logout(context) {
        localStorage.removeItem('token')
        // delete this.axios.defaults.headers.common['Authorization']
        context.commit("logout")
      },

      async reg(context, payload) {    
        const response = await this.axios.post("users/registration", payload)
        const token = response.data.token
        const userFromRes = response.data.user

        localStorage.setItem('token', token)


        context.commit("reg", userFromRes)
      }
    }
}