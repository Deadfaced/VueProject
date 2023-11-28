<template>
  <div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <img :src="product.imageUrl" alt="Product Image" />
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      const productId = this.$route.params.id;
      return {
        title: 'Product Title',
        description: 'Product Description',
        imageUrl: 'https://example.com/default-image.jpg',
      };
    },
  },
};
</script>

<style scoped>
</style>
