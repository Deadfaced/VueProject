<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center my-8">Products that you might not know</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Product v-for="product in products" :key="product.id" :item="product" class="mb-8" />
    </div>
  </div>
</template>

  <script>
  import Product from './Product.vue';
  import { fetchData } from '../../Services/apiService.js';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      for (let i = 0; i < 3; i++) {
        let randomProductId;
        do {
          randomProductId = Math.floor(Math.random() * 8) + 1;
        } while (this.products.some(product => product.id === randomProductId));
  
        const response = await fetchData(`http://127.0.0.1:3333/products/${randomProductId}`);
        this.products.push(response);
      }
    },
    components: {
      Product,
    },
  };
  </script>
  
  <style scoped>
  </style>
  