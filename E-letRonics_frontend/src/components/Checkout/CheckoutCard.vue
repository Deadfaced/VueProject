<template>
    <div class="mx-4 rounded-md border-gray-100 text-gray-600 shadow-xl">
      <div class="relative flex h-full flex-col text-gray-600 md:flex-row">
    <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
        <img class="block h-auto max-h-48 rounded-md shadow-lg" src="https://pplware.sapo.pt/wp-content/uploads/2022/12/GeForce-GTX-1650.jpg" alt="Shop image" />
    </div>
    <div class="relative p-1 md:w-4/6"> 
      <div class="flex flex-col md:flex-row">
        <h2 class="mb-2 text-2xl font-black text-white">Title</h2>
      </div>
      <p class="mt-3 mr-2 font-sans text-base tracking-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
      <div class="flex flex-col md:flex-row md:items-end">
        <p class="mt-6 text-4xl text-white">50<sup class="align-super text-sm">99€</sup></p>
      </div>
      <div class="mt-8 flex flex-col sm:flex-row">
        <Counter></Counter>
        <button class="ml-auto mb-4 mr-2 cursor-pointer rounded-md border px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>        
        </button>
      </div>
    </div>
  </div>
</div>
  </template>

<script>
import Counter from './Counter.vue';
export default {
  components: { Counter },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

</style>
