<template>
  <figure class="image py-2 px-2">
    <img class="transition-transform transform hover:scale-105 rounded-lg" :src="imageUrl" style="width: 40vw; height: 40vh;"/>
  </figure>
</template>

<script>
export default {
  props: ['imageUrl'],
};
</script>


<style scoped>
</style>