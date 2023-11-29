<template>
  <div class="card">
    <div v-if="product && product.image" class="image-container">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="info-container">
      <h2>{{ product ? product.name : 'No Name' }}</h2>
      <p>{{ product ? product.description : 'No Description' }}</p>
      <p>{{ product ? `Price: $${product.price.toFixed(2)}` : 'No Price' }}</p>
      <p>{{ product ? `Quantity: ${product.quantity}` : 'No Quantity' }}</p>
      <p>{{ product ? `Rating: ${product.rating}` : 'No Rating' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchData } from '../../Services/apiService.js';

const product = ref(null);

onMounted(async () => {
  try {
    const data = await fetchData('http://127.0.0.1:3333/products');
    if (data.length > 0) {
      product.value = data[0];
    } else {
      console.error('No product data available');
    }
  } catch (error) {
    console.error('Error calling API:', error);
  }
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-container {
  margin-top: 16px;
  text-align: center;
}
</style>
