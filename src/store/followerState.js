export default {
    namespaced: true,
    state() {
        return {
            follower: {},
            userId: '',
            isLoading: true
        }
    },
    mutations: {
        getUserId(state, id) {
            state.userId = id
        },
        getFollower(state, followerData) {
            state.follower = followerData
            state.isLoading = false
        },
        setLoaded(state) {
            state.isLoading = true
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        follower(state) {
            return state.follower
        },
        followerImages(state) {
            if(state.follower.images) {
                return state.follower.images 
            } else {
                return []
            }
        },
        followerImagesLength(state) {
            if(state.follower.images) {
                return state.follower.images.length 
            } else {
                return 0
            }
        },
        followerAvatar(state) {
            if(state.follower.avatars) {
                return state.follower.avatars 
            } else {
                return []
            }
        },
        followerFollowersLength(state) {
            if(state.follower.followers) {
                return state.follower.followers.length 
            } else {
                return 0
            }
        },
        followerSubscriptionsLength(state) {
            if(state.follower.subscriptions) {
                return state.follower.subscriptions.length 
            } else {
                return 0
            }
        },
        isLoading(state) {
            return state.isLoading
        }

    },
    actions: {
        getUserId(context, id) {
            context.commit('getUserId', id)
        },
        async getFollower(context) {
            const userId = context.getters.userId
            try {
                const response = await this.axios.post("users/follower", { id: userId })
                const followerData = response.data.follower
        
                context.commit('getFollower', followerData)   
            } catch (error) {
                console.log(error)
            }
        },
        
    }


    
}