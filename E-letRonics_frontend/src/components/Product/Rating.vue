<template>
    <div class="rating">
      <input
        v-for="star in rating" :key="star" type="radio" :name="`rating-${maxStars}`" disabled class="mask mask-star-2 bg-yellow-500"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: {
        default: 0,
      },
      maxStars: {
        default: 5,
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  