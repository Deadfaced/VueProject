<template>
    <div class="mt-8 flex flex-col sm:flex-row">
        <button @click="decreaseQuantity" class="mr-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">-</button>
        <h1 class="text-2xl text-white">{{ quantity }}</h1>
        <button @click="increaseQuantity" class="mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-500 hover:text-white">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1, 
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>

</style>