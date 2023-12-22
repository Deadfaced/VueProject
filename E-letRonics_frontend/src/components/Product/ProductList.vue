
  <template>
    <div>
      <h1 class="text-3xl font-bold text-center mt-8 md:my-10">Products that you might not know</h1>
      <div class="flex flex-wrap justify-center  md:my-10">
        <Product v-for="product in products" :key="product.id" :item="product" class="mt-5" />
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
  