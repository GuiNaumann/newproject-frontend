<template>
  <div id="app">
    <UserCreate @user-created="refreshUsers" />
    <UserList ref="userList" />
  </div>
</template>

<script>
import UserCreate from '@/components/UserCreate.vue';
import UserList from '@/components/UserList.vue';

export default {
  name: 'App',
  components: {
    UserCreate,
    UserList
  },
  methods: {
    refreshUsers() {
      this.$refs.userList.fetchUsers();
    }
  }
};
</script>
