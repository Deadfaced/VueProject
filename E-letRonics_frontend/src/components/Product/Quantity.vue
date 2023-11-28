<template>
    <p class="quantity">Quantity: {{ quantity }}</p>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      quantity: Number,
    },
    setup(props) {
      const quantity = ref(props.quantity);
  
      return {
        quantity,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  