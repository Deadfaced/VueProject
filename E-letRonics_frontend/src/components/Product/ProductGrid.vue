<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Products</h1>
      </div>
      <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        const data = await fetchData('https://fakestoreapi.com/products');
        // Default values
        products.value = data.map(product => ({
          name: product.title || 'Name Unavailable',
          description: product.description || 'Description Not Available',
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
</style>