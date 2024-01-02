<script setup>
import { ref, onMounted } from 'vue';
import CardCart from './CardCart.vue';
import { useCartStore } from '../../CartStorePinia.js';

const cartStore = useCartStore();

onMounted(async () => {
  await cartStore.fetchCartItems();
});

function deleteCartItem(itemId) {
  cartStore.deleteCartItem(itemId);
};
</script>
    
<template>
  <div>
    <div class="fixed inset-0 bg-black opacity-50 left-100 z-10" @click="$emit('close')"></div>
    <div class="fixed top-0 right-0 bottom-0 shadow-right w-64 h-full z-50 bg-base-200 text-base-content flex flex-col">
      <button class="ml-auto mr-2 text-white hover:text-gray-300" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" width="20" height="20" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="pr-4 pb-4 pl-4 overflow-y-auto h-full no-scrollbar">
        <div class="sticky top-0 bg-base-200">
          <h2 class="text-lg font-semibold mb-4 flex items-center justify-center">
            <span class="highlight">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff9900" stroke="currentColor" width="25" height="25"
              viewBox="0 0 576 512" class="w-6 h-6 ml-2 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z">
              </path>
            </svg>
          </h2>
          <h3 class="pb-2 text-sm flex items-center justify-center sticky top-7 animate-pulse">Free shipping over €50</h3>
        </div>
        <div v-if="cartStore.cart.length === 0" class="flex items-center justify-center">
          <img width="80"
            src="https://loja.forestpaper.com.br/skin/frontend/k13/default/K13/overwrite/checkout/cart/img/empty-cart.png"
            alt="Empty Cart" class="mt-4">
        </div>
        <ul>
          <li>
            <card-cart v-if="cartStore.CartItemProperties.length > 0" v-for="item in cartStore.CartItemProperties" :key="item.id" :id="item.id" :image="item.image" :name="item.name"
              :cartQty="item.cartQty" :price="item.price" :availability="item.availability" :totalPrice="item.totalPrice" @delete="deleteCartItem">
            </card-cart>
          </li>
        </ul>
      </div>
      <div class="ml-auto flex items-center justify-center py-6 h-24">
        <router-link v-if="cartStore.cart.length > 0" :to="{ name: 'Checkout'}"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-4">
          Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped></style>
