<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Products</h1>
      </div>
      <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <Product :item="product">
            </Product>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from './Product.vue';
import { fetchData } from '../../Services/apiService.js';

export default {
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const data = await fetchData('http://127.0.0.1:3333/products');
        products.value = data;
      } catch (error) {
        console.error('Error calling API:', error);
      }
    });

    return {
      products,
    };
  },
  components: {
    Product,
  },
};
</script>

<style scoped>

</style>
