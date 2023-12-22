<template>
  <figure class="image py-2 px-2">
    <img class="transition-transform transform hover:scale-105 rounded-lg lg:w-40w lg:h-40h md:w-40w md:h-40h" :src="imageUrl"/>
  </figure>
</template>

<script>
export default {
  props: ['imageUrl'],
};
</script>


<style scoped>
</style>