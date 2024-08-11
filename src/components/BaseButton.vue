<template>
  <button :class="buttonClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': this.type === 'primary',
        'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded': this.type === 'secondary'
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
/* Adicione estilos adicionais se necessário */
</style>
