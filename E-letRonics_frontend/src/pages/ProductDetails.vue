<template>
  <div class="container mx-auto p-4 text-center">
    <Success />
    <div v-if="product" class="rounded-lg overflow-hidden">
      <h2 class="text-3xl font-bold my-4">{{ product.name }}</h2>
      <div class="lg:mx-60 sm:mx-20">
        <img :src="product.image || 'https://via.placeholder.com/400'" alt="Product Image"
          class="object-cover object-center w-full h-64 lg:h-auto mx-auto mb-4">

        <div class="flex justify-between mt-4">
          <span class="text-lg font-bold text-3x1">{{ product.price }} €</span>
          <span class="text-lg font-bold text-3x1">Rating: {{ product.rating }}.0</span>
        </div>

        <div class="flex items-center justify-between">
          <router-link to="/Shop"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">Back
            to Products</router-link>

          <div class="flex gap-3">
            <button @click="decreaseQuantity" class="btn">-</button>
            <span class="text-2xl">{{ quantity }}</span>
            <button @click="increaseQuantity" class="btn">+</button>
            <div class="flex">
              <button @click="addToCart"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">Add
                to Cart</button>
            </div>
          </div>
        </div>
        <ProductList />
      </div>
    </div>
    <h1 class="text-2xl font-bold text-center">Reviews</h1>
    <div class="flex flex-col items-center mt-12">
      <div class="flex-1 mb-4 review-card">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-700">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"This product is amazing! It completely changed my life. I can't imagine my
              day without it."</p>
            <p class="italic text-white-600 mt-2">- John Doe</p>
          </div>
        </div>
      </div>
      <div class="flex-1 mb-4 review-card-2">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-800">
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar"
            class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"I was skeptical at first, but after using this product, I'm a true
              believer.
              It exceeded my expectations."</p>
            <p class="italic text-white-600 mt-2">- Jane Smith</p>
          </div>
        </div>
      </div>
      <div class="flex-1 review-card mb-8">
        <div class="flex items-center p-8 rounded-lg shadow-lg bg-slate-700">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User Avatar" class="rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-white-800 text-lg">"Life before this product and after are two completely different things. I
              highly recommend it!"</p>
            <p class="italic text-white-600 mt-2">- Mike Johnson</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Success from '../components/Toasts/Success.vue';
import ProductList from '../components/Product/ProductList.vue';
import { useCartStore } from '../CartStorePinia.js';
import { EventBus } from '../event-bus.js';

export default {
  data() {
    return {
      quantity: 1,
      product: Object,
    };
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    increaseQuantity() {
      if (this.quantity < this.product.quantity)
        this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart() {
      if (this.quantity > this.product.quantity) {
        alert('Not enough stock!');
        return;
      }
      this.cartStore.addToCart(this.product, this.quantity);
      EventBus.emit('product-added-to-cart', { product: this.product, quantity: this.quantity });
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
  .review-card {
    margin-right: 10%;
    margin-left: 10%;
  }

  .review-card-2 {
    margin-right: 5%;
    margin-left: 5%;
  }

  .details-container {
    margin-right: 10%;
    margin-left: 10%;
  }
}
</style>
