<template>
  <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
    <h1 class="text-2xl font-bold mb-4 text-center">Cadastrar Usuário</h1>
    <form @submit.prevent="createUser" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nome:</label>
        <input v-model="user.name" type="text" id="name" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
        <input v-model="user.email" type="email" id="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <BaseButton type="primary" class="w-full">Cadastrar</BaseButton>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: { BaseButton },
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await api.post('/users', this.user);
        this.user.name = '';
        this.user.email = '';
        this.$emit('user-created');
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    }
  }
};
</script>
