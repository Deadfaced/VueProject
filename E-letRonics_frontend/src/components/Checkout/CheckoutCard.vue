<template>
  <div class="mx-4 rounded-md border-gray-100 text-gray-600 shadow-xl">
    <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
      <div class="mx-10 flex items">
        <img class="my-20 block rounded-md shadow-lg" :src="image" alt="Shop image" />
      </div>
      <div class="relative">
        <div class="flex flex-col md:flex-row">
          <h2 class="mb-2 text-2xl font-black text-white">{{ name }}</h2>
        </div>
        <p class="mt-3 mr-2 font-sans text-base tracking-normal text-white">{{ shortenedDescription }}</p>
        <div class="flex flex-col md:flex-row md:items-end">
          <p class="mt-6 text-4xl text-white">{{ price }}</p>
        </div>
        <div class="mt-8 flex flex-col sm:flex-row">
          <Counter :id="id" :qty="cartQty"></Counter>
          <button @click="removeFromCart (id)"
            class="ml-auto mb-4 mr-2 cursor-pointer rounded-md border px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path fill="#ffffff"
                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import { useCartStore } from '../../CartStorePinia.js';

export default {
  components: { Counter },
  props: ['id', 'image', 'name', 'description', 'price', 'cartQty', 'totalPrice'],
  setup() {
    const cartStore = useCartStore();

    const removeFromCart = (id) => {
      cartStore.deleteCartItem(id);
    };

    return {
      removeFromCart,
    };
  },
  computed: {
    isLongText() {
      return this.description.length > 50;
    },
    shortenedDescription() {
      return this.isLongText ? this.description.slice(0, 50) + '...' : this.description;
    },
  },
};
</script>

<style scoped></style>
