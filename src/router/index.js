// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import UserList from '@/components/UserList.vue';
import UserCreate from '@/components/UserCreate.vue';

const routes = [
    { path: '/', component: UserList },
    { path: '/create', component: UserCreate }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
