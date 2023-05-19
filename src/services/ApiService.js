import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    register(payload) {
        return apiClient.post('api/register', payload)
    },

    login(payload) {
        return apiClient.post('api/login', payload)
    },

    logout(token) {
        apiClient.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return apiClient.post('api/logout')
    },

    savePreference(payload, token) {
        apiClient.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return apiClient.post('api/preference/save', payload)
    },

    getArticles(token) {
        apiClient.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return apiClient.get('api/articles')
    },

    search(payload, token) {
        apiClient.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        return apiClient.post('api/article/search', payload)
    }
}
