import router from "../router/index";

export default {
    namespaced: true,
    state() {
        return {
            token: '',
            auth: false,
            user: {},
            status: ''
        }
    },
    mutations: {
      login(state, { token, userData }) { 
          state.token = token
          state.auth = true
          state.user = userData
          console.log(state.user)
          router.push('/profile')
          
      },
      logout(state) {
          state.token = ''
          state.auth = false
          router.push('/login')
        
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
      token (state) {
        return state.token
      }
    },
    
    actions: {
      async login(context, payload) {
        try {
          const response = await this.axios.post("users/login", payload)
          const token = response.data.token
          const userData = JSON.stringify(response.data.user)
          
          localStorage.setItem('token', token)
          localStorage.setItem('user', userData)

          context.commit('login', { token, userData } )

        } catch(error) {
          alert(`неверный пароль ${error}`)
        }
      },

      logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        context.commit("logout")
      },

      async reg(context, payload) {    
        const response = await this.axios.post("users/registration", payload)
        const token = response.data.token
        const userFromRes = response.data.user

        localStorage.setItem('token', token)
        context.commit("reg", userFromRes)
      },

      autologin(context) {
        const token = localStorage.getItem('token')
        const userData = JSON.parse(localStorage.getItem('user'))
        
        context.commit('login', { token, userData })
      }

    }
}