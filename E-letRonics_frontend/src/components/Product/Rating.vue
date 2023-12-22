<template>
    <div class="rating">
      <input
      v-for="star in maxStars" :key="star" type="radio"
      :class="{ 'mask mask-star-2 bg-yellow-500': star > maxStars - rating, 'mask mask-star-2 bg-yellow-700': star <= maxStars - rating }"
      disabled
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
  