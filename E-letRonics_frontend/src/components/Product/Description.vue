<template>
  <p class="description">
    {{ description }}
  </p>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    description: String,
  },
};
</script>

<style scoped>
</style>
