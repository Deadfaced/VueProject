<template>
  <div class="bg-base-100 shadow-xl p-4 mt-4 max-w-xs">
    <img :src="image" alt="Item" class="rounded-lg object-cover" />
    <div class="card-body">
      <h2 class="card-title text-sm">{{ name }}</h2>
      <h2 class="card-title text-sm">Qty: {{ cartQty }}</h2>
      <h2 class="card-title text-sm">Unit Cost: {{ price }}</h2>
      <h2 class="card-title text-sm">{{ availability }}</h2>
      <h2 class="card-title text-sm">Total: {{ totalPrice }}</h2>
      <button @click="deleteCartItem (id)"
        class="ml-auto mb-4 mr-2 cursor-pointer rounded-md border px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="14" viewBox="0 0 448 512">
          <path fill="#ffffff"
            d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
        </svg>
      </button>
    </div>
  </div>
</template>


  

<script setup>
import { useCartStore } from '../../CartStorePinia.js'; 

const cartStore = useCartStore(); 

defineProps(['id', 'image', 'name', 'cartQty', 'price', 'availability', 'totalPrice', 'item']);

function deleteCartItem(itemId) {
  cartStore.deleteCartItem(itemId);
};
</script>

<style></style>