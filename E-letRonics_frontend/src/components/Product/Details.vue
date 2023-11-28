<template>
    <div>
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <img :src="product.imageUrl" alt="Product Image" />
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  };
  </script>
  
  <style scoped>
  </style>
  