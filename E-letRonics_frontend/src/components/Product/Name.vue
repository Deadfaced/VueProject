<template>
  <h2 class="m-0 p-0 text-2xl font-bold text-center name">
    {{ name }}
  </h2>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
</style>
