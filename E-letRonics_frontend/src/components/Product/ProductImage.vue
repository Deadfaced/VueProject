<template>
  <figure class="image">
    <img class="w-full h-auto transition-transform transform hover:scale-105" :src="imageUrl" />
  </figure>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    imageUrl: String,
  },
};
</script>

<style scoped>
</style>
