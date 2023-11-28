<template>
    <p class="price">{{ formattedPrice }}</p>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    props: {
      price: Number,
    },
    setup(props) {
      const formattedPrice = computed(() => {
        return `$${props.price.toFixed(2)}`;
      });
  
      return {
        formattedPrice,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  