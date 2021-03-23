import router from "../router/index";

export default {
    namespaced: true,
    state() {
        return {
          token: '',
          auth: false,
          status: ''
        }
    },
    mutations: {
      login(state, token) { 
          state.token = token
          state.auth = true
          router.push('/profile') 
      },
      logout(state) {
        state.token = ''
        state.auth = false
        router.push('/login')
        
      },
      reg(state, token) { 
        state.token = token
        state.auth = true
        router.push('/profile')
      }
    },

    getters: {
      auth(state) {
        return state.auth
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
          const userData = response.data.user
          const userString = JSON.stringify(response.data.user)
          
          localStorage.setItem('token', token)
          localStorage.setItem('user', userString)

          context.commit('login', token )
          context.commit('updateUser', userData, { root: true })

        } catch(error) {
          alert(`неверный пароль ${error}`)
        }
      },

      logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        context.commit("logout")
        context.commit("updateUser", {}, { root: true })
      },

      async reg(context, payload) {
        try {
          const response = await this.axios.post("users/registration", payload)
          const token = response.data.token
          const userData = response.data.user
          const userString = JSON.stringify(response.data.user)

          localStorage.setItem('token', token)
          localStorage.setItem('user', userString)

          context.commit('reg', token)
          context.commit('updateUser', userData, { root: true })

        } catch(error) {
          alert(`user already exists ${error}`)
        }    
        
      },

      autologin(context) {
        const token = localStorage.getItem('token')
        if(token === null) {
          return 
        }
        const userData = JSON.parse(localStorage.getItem('user'))
         
        context.commit('login', token)
        context.commit('reg', token)
        context.commit('updateUser', userData, { root: true })
      }

    }
}