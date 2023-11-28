<template>
  <figure class="image">
    <img class="w-full h-auto transition-transform transform hover:scale-105" :src="imageUrl" style="width: 100%; height: 60vh;"/>
  </figure>
</template>

<script>
export default {
  props: ['imageUrl'],
};
</script>


<style scoped>
</style>