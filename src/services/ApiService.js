
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://projects.test/innoscripta/innoscripta-laravel/public/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${user.token}`,
    }
})

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    async register(payload) {
        try {
            return await apiClient.post('register', payload)
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async login(payload) {
        try {
            return await apiClient.post('login', payload)
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async logout(payload) {
        try {
            return await apiClient.post('logout', payload)
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async articles() {
        try {
            return await apiClient.get('articles')
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async preferences() {
        try {
            return await apiClient.get('preferences')
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async search(payload) {
        try {
            return await apiClient.post('search', payload)
        } catch (error) {
            console.error(error)
            return error
        }
    },

    async savePreference() {
        try {
            return await apiClient.get('preference/save')
        } catch (error) {
            console.error(error)
            return error
        }
    }
}