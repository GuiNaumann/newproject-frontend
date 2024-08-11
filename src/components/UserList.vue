<template>
  <div class="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
    <h1 class="text-2xl font-bold mb-4 text-center">Lista de Usuários</h1>
    <ul class="divide-y divide-gray-200">
      <li v-for="user in users" :key="user.id" class="py-3">
        <div class="flex justify-between">
          <span>{{ user.name }}</span>
          <span>{{ user.email }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await api.get('/users');
        this.users = response.data;
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }
  }
};
</script>
