export default {
    namespaced: true,
    state() {
        return {
            users: [],
            modalFollowers: false,
            modalSubscriptions: false,
            page: 1,
            nextPage: 2,
            totalPages: 0,
            limit: 4,
            filterValue : '',
            sortValue: '',
            subscriptions: [],
            followers: [],
            valueButton: false
        }
    },
    mutations: {
        getUsers(state, { usersData, totalPagesData, currentPage }) {
            if(currentPage === 1) {
                state.users = usersData
                state.totalPages = totalPagesData  
                state.page = currentPage
                state.nextPage = currentPage + 1
                state.filterValue = ''
            } else {
                state.users.push(...usersData)
                state.totalPages = totalPagesData  
                state.page = currentPage
                state.nextPage = currentPage + 1
            }
        },
        getFollowers(state, { subscriptions, followers }) {
            state.subscriptions = subscriptions
            state.followers = followers
        },
        openModalFollowers(state) {
            state.modalFollowers = true
        },
        closeModalFollowers(state) {
            state.modalFollowers = false
        },
        openModalSubscriptions(state) {
            state.modalSubscriptions = true
        },
        closeModalSubscriptions(state) {
            state.modalSubscriptions = false
        },
        getFilteredUsers(state, { usersData, filter } ){
            if(filter) {
                state.users = usersData
                state.filterValue = filter 
            }
        },
        getSortUsers(state, sort ){
            if(sort) {
                state.sortValue = sort 
            }
        },
        deleteSubscrption(state, { subscriptions, subscription, payload }) {
            state.subscriptions = subscriptions
            let newUsers = state.users.map(user => {
                return user._id === payload ? subscription : user
            });
            state.users = newUsers
        },
        updateUsers(state, { subscription, payload }) {
            let newUsers = state.users.map(user => {
                return user._id === payload ? subscription : user
            });
            state.users = newUsers
        },
        // updateUsersLogout(state) {
        //     state.users = []
        // }
    },
    getters: {
        users(state) {
            return state.users
        },
        followers(state) {
            return state.followers
        },
        subscriptions(state) {
            return state.subscriptions
        },
        modalFollowers(state) {
            return state.modalFollowers
        },
        modalSubscriptions(state) {
            return state.modalSubscriptions
        },
        page(state) {
            return state.page
        },
        limit(state) {
            return state.limit
        },
        totalPages(state) {
            return state.totalPages
        },
        filterValue(state) {
            return state.filterValue
        },
        sortValue(state) {
            return state.sortValue
        },
        valueButton(state) {
            return state.valueButton
        }
    },
    actions: {
        async getUsers(context, payload) {
            try {
                const filter = payload.filter
                const currentLimit = payload.currentLimit
                const currentPage = payload.currentPage
                const sort = payload.sort
                
                const response = await this.axios.get(`users?page=${currentPage}&limit=${currentLimit}&filter=${filter || ''}&sort=${sort || ''}`)
                const usersData = response.data.users
                const totalPagesData = response.data.totalPages
                
                context.commit('getFilteredUsers', { usersData, filter })
                context.commit('getSortUsers', sort )   
                context.commit('getUsers', { usersData, totalPagesData, currentPage })
                
            } catch (error) {
                console.log(error)
            }
        },

        async addFollowers(context, payload) {
            try {
                const response = await this.axios.put("users/followers", { id: payload })
                const userData = response.data.user
                const userString = JSON.stringify(response.data.user)
                const subscription = response.data.subscription
                localStorage.setItem('user', userString)
                context.commit('updateUser', userData, { root: true })
                context.commit('updateUsers', { subscription, payload })
                
            } catch (error) {
                console.log(error)
            }
        },

        async deleteSubscrption(context, payload) {
            try {
                const response = await this.axios.post("users/subscription", { id: payload })
                const userData = response.data.user
                const subscriptions = response.data.subscriptions
                const subscription = response.data.subscription
                context.commit('deleteSubscrption', { subscriptions, subscription, payload })
                context.commit('updateUser', userData, { root: true })
            } catch (error) {
                console.log(error)
            }
        },

        async getFollowers(context) {
            try {
                const response = await this.axios.post("users/followers")
                const subscriptions = response.data.subscriptions
                const followers = response.data.followers
    
                context.commit('getFollowers', { subscriptions, followers })
            } catch (error) {
                console.log(error)
            }
        },
        openModalFollowers(context) {
            context.commit('openModalFollowers')
        },
        closeModalFollowers(context) {
            context.commit('closeModalFollowers')
        },
        openModalSubscriptions(context) {
            context.commit('openModalSubscriptions')
        },
        closeModalSubscriptions(context) {
            context.commit('closeModalSubscriptions')
        },
    }
}