export default {
    namespaced: true,
    actions: {
        async uploadPhoto(context, payload) {
            let formData = new FormData();
            formData.append('filedata', payload);
            try {
                const response = await this.axios.post("users/upload/photo",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                const userData = response.data.user
                const userString = JSON.stringify(response.data.user)
                localStorage.setItem('user', userString)
                alert('SUCCESS')
                context.commit('updateUser', userData, { root: true })
                
            } catch(error) {
                alert(`FAILURE ${error}`);
            }
        },
        async uploadAvatar(context, payload) {
            let formData = new FormData();
            formData.append('filedata', payload);
            try {
                const response = await this.axios.post("users/upload/avatar",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                const userData = response.data.user
                const userString = JSON.stringify(response.data.user)
                localStorage.setItem('user', userString)
                alert('SUCCESS')
                context.commit('updateUser', userData, { root: true })
                
            } catch(error) {
                alert(`FAILURE ${error}`);
            }
        },

        async deletePhoto(context, payload) {
            try {
                const response = await this.axios.post("users", payload)
                const userData = response.data.user
                const userString = JSON.stringify(response.data.user)
                localStorage.setItem('user', userString)
                
                context.commit('updateUser', userData, { root: true })
            } catch(error) {
                alert(`FAILURE ${error}`);
            }
            
        }
    }
}