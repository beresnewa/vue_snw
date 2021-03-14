export default {
    namespaced: true,
    state() {
        return {
            auth: false,
            user: {},
        }
    },
    mutations: {
      login(state) {
        state.auth = true
      },
      logout(state) {
        state.auth = false;
      },
      reg(state) {
        state.auth = true
      }
    },

    getters: {
      auth(state) {
        return state.auth
      }
    },
    
    actions: {
      async login(context, payload) {
        const response = await this.axios.post("users/login", payload) 
        const token = response.data.token
        localStorage.setItem('token', token)
        context.commit("login", payload)
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