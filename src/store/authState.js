export default {
    namespaced: true,
    state() {
        return {
            auth: false,
            user: {},
        }
    },
    mutations: {
      login(state, userFromRes) { 
        const token = localStorage.getItem('token')
        if(token) {
          state.auth = true
          state.user = userFromRes
        }
      },
      logout(state) {
        const token = localStorage.getItem('token')
        if(!token) {
          state.auth = false
        }
        console.log(state.auth)
      },
      reg(state) {
        const token = localStorage.getItem('token')
        if(token) {
          state.auth = true
        }
      }
    },

    getters: {
      auth(state) {
        return state.auth
      },
      user(state) {
        return state.user
      }
    },
    
    actions: {
      async login(context, payload) {
        const response = await this.axios.post("users/login", payload) 
        const token = response.data.token
        const userFromRes = response.data.user
      
        localStorage.setItem('token', token)
        context.commit('login', userFromRes)
      },

      logout(context) {
        localStorage.removeItem('token')
        context.commit("logout")
      },

      async reg(context, payload) {    
        const response = await this.axios.post("users/registration", payload)
        const token = response.data.token
        localStorage.setItem('token', token)
        context.commit("reg", payload)
      }
    }
}