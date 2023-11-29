<template>
  <div>
    <h1>Product Details</h1>
    <div>
      {{ productDetails }}
    </div>
  </div>
</template>

<script>
import { fetchData } from '../Services/apiService.js';

export default {
  data() {
    return {
      productDetails: null,
    };
  },
  created() {
    const itemId = this.$route.params.id;
    fetchData(itemId).then((data) => {
      this.productDetails = data;
    });
  },
};
</script>

<style scoped>
</style>
