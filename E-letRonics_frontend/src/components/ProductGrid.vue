   <template>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Products</h1>
      </div>
      <div class="flex flex-wrap">
        <div v-for="index in 8" :key="index" class="lg:w-1/4 sm:w-1/2 p-4 gap-4">
          <div class="flex relative">
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
   
   <script>
   import Product from './Product.vue';
   
   export default {
     setup() {
       return {};
     },
     components: {
       Product,
     },
   };
   </script>
   
   <style lang="scss" scoped>
   
   </style>