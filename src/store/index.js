import { createStore } from 'vuex';
import api from '@/services/api';

export default createStore({
    state: {
        users: []
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        addUser(state, user) {
            state.users.push(user);
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const response = await api.get('/users');
            commit('setUsers', response.data);
        },
        async createUser({ commit }, user) {
            const response = await api.post('/users', user);
            commit('addUser', response.data);
        }
    },
    getters: {
        users: state => state.users
    }
});
