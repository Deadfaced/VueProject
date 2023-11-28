<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Products</h1>
      </div>
      <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="index in 8" :key="index">
          <div class="relative">
            <Product>
              <template v-slot:image>
              </template>
              <template v-slot:title>
              </template>
              <template v-slot:description>
              </template>
            </Product>
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

<style scoped>

</style>
