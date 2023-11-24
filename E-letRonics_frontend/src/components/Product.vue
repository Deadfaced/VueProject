<template>
    <div class="flex justify-center items-center mx-auto">
      <div class="card glass">
        <figure>
          <img class="w-full h-auto transition-transform transform hover:scale-105" src="https://static.pcdiga.com/media/catalog/product/cache/4a9972e1440204cef7cf19ceb7c4fc35/2/_/2_p061426.jpg" alt="PC" />
        </figure>
        <div class="flex flex-col justify-between items-center w-full h-full p-4">
          <h2 class="m-0 p-0 text-2xl font-bold text-center">Life Hack</h2>
          <p>Discover the art of parking your car in your garage with ease.</p>
          <div class="flex flex-col justify-between items-center w-full mt-4">
            <button class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">Learn Now!</button>
            <Rating></Rating>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Rating from './Rating.vue';
  
  export default {
    setup() {
      return {};
    },
    components: {
      Rating,
    },
  };
  </script>
  
  <style scoped>
  .card {
    transition: all 0.3s ease-in-out;
  }
  
  .btn {
    transition: all 0.3s ease-in-out;
  }
  
  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  