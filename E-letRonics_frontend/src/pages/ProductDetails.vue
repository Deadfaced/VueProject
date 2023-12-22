<template>
  <div class="flex flex-col items-center mt-8 details-container">
    <Success />
    <div class="flex flex-col items-center" v-if="product">
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-center mb-10 mx-10">{{ product.name }}</h2>

        <img :src="product.image || 'https://example.com/placeholder.jpg'" alt="Product Image" class="rounded-md shadow-md w-20 h-20 lg:w-1/2 lg:h-auto mx-auto">
      </div>
      <div class="flex-1 p-20">
        <p class="text-gray-400 text-center">{{ product.description }}</p>

        <div class="flex justify-between mt-4">
          <span class="text-lg font-bold text-3x1 text-yellow-500">{{ product.price }} €</span>
          <span class="text-lg font-bold text-3x1 text-yellow-500">Rating: {{ product.rating }}.0</span>
        </div>

        <div class="flex items-center justify-end">
  <button @click="decreaseQuantity" class="btn">-</button>
  <span class="mx-4 text-2xl">{{ quantity }}</span>
  <button @click="increaseQuantity" class="btn">+</button>
  <div class="flex ml-4">
    <button @click="addToCart" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-5">Add to Cart</button>
    <router-link to="/Shop" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Back to Products</router-link>
  </div>
</div>
<ProductList />
      </div>
    </div>
  </div>
    <h1 class="text-2xl font-bold text-center">Reviews</h1>
    <div class="flex flex-col items-center mt-12">
      <div class="flex-1 mb-4 review-card">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-700">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"This product is amazing! It completely changed my life. I can't imagine my day without it."</p>
            <p class="italic text-white-600 mt-2">- John Doe</p>
          </div>
        </div>
      </div>
      <div class="flex-1 mb-4 review-card-2">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-800">
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar" class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"I was skeptical at first, but after using this product, I'm a true believer. It exceeded my expectations."</p>
            <p class="italic text-white-600 mt-2">- Jane Smith</p>
          </div>
        </div>
      </div>
      <div class="flex-1 review-card mb-8">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-700">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User Avatar" class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"Life before this product and after are two completely different things. I highly recommend it!"</p>
            <p class="italic text-white-600 mt-2">- Mike Johnson</p>
          </div>
      </div>
    </div>  
    </div>
</template>

<script>
import Success from '../components/Toasts/Success.vue';
import EventBus from '../event-bus.js';
import ProductList from '../components/Product/ProductList.vue';

export default {
  data() {
    return {
      quantity: 1,
      product: Object,
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
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      let found = cart.find((el) => el.id === this.product.id);
      if (found) {
        found.qty += this.quantity;
      } else {
        cart.push({ id: this.product.id, qty: this.quantity });
      }
      EventBus.emit('product-added-to-cart', {
        product: this.product,
        quantity: this.quantity,
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    },
    async fetchProductDetails() {
      try {
        const productId = this.$route.params.id;
        const response = await fetch(`http://127.0.0.1:3333/products/${productId}`);
        const data = await response.json();
        this.product = data;
      } catch (error) {
        console.error('Error calling API:', error);
      }
    },
  },
  created() {
    this.fetchProductDetails();
  },
  components: {
    Success,
    ProductList,  
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .product-details-content {
    flex-direction: row;
  }

  .product-info {
    text-align: left;
  }
  
  .product-info img {
    width: 50%;
    max-width: 100%;
    margin: 0 auto;
  }
  
}
@media (max-width: 768px) {
  .review-card{
      margin-right: 10%;
      margin-left: 10%;
  }
  .review-card-2{
      margin-right: 5%;
      margin-left: 5%;
  }
  .details-container{
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>
