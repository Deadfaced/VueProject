<template>
    <div class="flex justify-center items-center mx-auto">
      <div class="card glass">
        <ImageComponent v-if="product && product.image" :imageUrl="product.image" />
        <div class="flex flex-col justify-between items-center w-full h-full p-4">
          <NameComponent :name="product ? `name: ${product.name}` : ''" />
          <DescriptionComponent :description="product ? product.description : ''" />
          <!-- <Price :price="product ? product.price : 0" /> -->
          <Quantity :quantity="product ? product.quantity : 0" />
          <Rating :rating="product ? product.rating : 0" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ImageComponent from './Image.vue';
  import NameComponent from './Name.vue';
  import DescriptionComponent from './Description.vue';
  import Price from './Price.vue';
  import Quantity from './Quantity.vue';
  import Rating from './Rating.vue';
  import { fetchData } from '../../Services/apiService.js';
  
  const product = ref(null);
  
  onMounted(async () => {
    try {
      const data = await fetchData('http://127.0.0.1:3333/products/');
      product.value = data[0];
    } catch (error) {
      console.error('Error calling API:', error);
    }
  });
  console.log(product.description);
  { product }
  </script>
  
  <style scoped>
  .card {
    transition: all 0.3s ease-in-out;
  }
  
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }
  </style>
  