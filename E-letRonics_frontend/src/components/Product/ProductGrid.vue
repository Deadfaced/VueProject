<template>
  <section class="text-gray-600">
    <div class="px-5 py-8 mx-auto flex items-center flex-col d-container">
      <div class="flex flex-col text-center mb-8">
        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-300">Products</h1>
      </div>
      <div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <Product :item="product"></Product>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from './Product.vue';
import { ref, onMounted } from 'vue';
import { fetchData } from '../../Services/apiService.js';

export default {
  components: {
    Product,
  },
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const data = await fetchData('http://127.0.0.1:3333/products');
        // Default values
        products.value = data.map(product => ({
          name: product.name || 'Name Unavailable',
          description: product.description || 'Description Unavailable',
          image: product.image || 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png',
          id: product.id,
          price: product.price || 0,
          quantity: product.quantity || 0,
          rating: product.rating || 0,
        }));
      } catch (error) {
        console.error('Error calling API:', error);
      }
    });

    return {
      products,
    };
  },
};
</script>

<style scoped>
.d-container{
  margin-right: 5%!important;
  margin-left: 5%!important;
} 
</style>