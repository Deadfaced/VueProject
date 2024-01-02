<template>
  <div>
    <Success></Success>
    <Failure></Failure>
    <h2 class="text-4xl text-white mt-8 ml-14">My Cart</h2>
    <div class="flex justify-center items-start h-screen space-x-4 mt-4">
      <div class="flex flex-col">
        <div v-for="item in cartStore.CartItemProperties" :key="item.id" class="mb-4">
          <CheckoutCard :id="item.id" :image="item.image" :name="item.name" :description="item.description"
            :price="item.price" :cartQty="item.cartQty" :item="item"></CheckoutCard>
        </div>
        <div class="flex justify-between mt-4 mb-8">
          <router-link to="/" class="bg-gray-700 text-white px-4 py-2 rounded-md ml-4">Back</router-link>
          <button @click="removeAllFromCart" class="bg-gray-700 text-white px-4 py-2 rounded-md mr-4">Empty Cart</button>
        </div>
      </div>
      <div class="flex flex-col">
        <SummaryCard></SummaryCard>
      </div>
    </div>
  </div>
</template>

<script setup>

import CheckoutCard from '../components/Checkout/CheckoutCard.vue';
import SummaryCard from '../components/Checkout/SummaryCard.vue';
import Success from '../components/Toasts/Success.vue';
import Failure from '../components/Toasts/Failure.vue';
import { useCartStore } from '../CartStorePinia.js';
import { onMounted } from 'vue';

const cartStore = useCartStore();

async function fetchCartItems() {
  await cartStore.fetchCartItems();
}

function removeAllFromCart() {
  cartStore.cart = [];
  localStorage.removeItem('cart');
};

function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < cartStore.cart.length; i++) {
    totalPrice += parseFloat(cartStore.cart[i].price) * cartStore.cart[i].qty;
  }
  localStorage.setItem('totalPrice', totalPrice.toFixed(2));
};

onMounted(async () => {
  await fetchCartItems();
  calculateTotalPrice();
});
</script>

<style scoped></style>