<template>
  <div class="product-details-container">
    <div class="product-details-content" v-if="product">
      <div class="product-image-container">
        <img :src="product.image || 'https://example.com/placeholder.jpg'" alt="Product Image" class="product-image">
      </div>

      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>

        <div class="product-meta">
          <span class="product-price">${{ product.price }}</span>
          <span class="product-rating">Rating: {{ product.rating }}.0</span>
        </div>

        <div class="quantity-controls">
          <button @click="decreaseQuantity" class="quantity-button">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="increaseQuantity" class="quantity-button">+</button>
        </div>

        <div class="action-buttons">
          <button @click="addToCart" class="action-button add-to-cart">Add to Cart</button>
          <router-link to="/products" class="action-button back-to-products">Back to Products</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
      product: null,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart() {
    },
    async fetchProductDetails() {
      try {
        const productId = this.$route.params.id;
        const response = await fetch(`http://127.0.0.1:3333/products/${productId}`);
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    },
  },
  created() {
    this.fetchProductDetails();
  },
};
</script>

<style scoped>
.product-details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.product-details-content {
  display: flex;
  width: 100%;
}

.product-image-container {
  flex: 1;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
  padding: 20px;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  color: #555;
  margin-bottom: 20px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.product-rating {
  font-size: 14px;
  color: #555;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.quantity-button {
  background-color: #4a5568;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.quantity {
  margin: 0 10px;
  font-size: 18px;
}

.action-buttons {
  display: flex;
}

.action-button {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.add-to-cart {
  background-color: #1a202c;
  color: white;
}

.back-to-products {
  background-color: #cbd5e0;
  color: #4a5568;
}

.action-button:hover {
  background-color: #cbd5e0;
}
</style>
