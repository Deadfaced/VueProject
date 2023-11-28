<template>
    <div class="sidebar bg-base-200 text-base-content flex flex-col h-full">
      <div class="p-4 overflow-y-auto">
        <h2 class="text-lg font-semibold mb-4 flex items-center justify-center">
          <span class="highligt">Cart</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff9900"
            stroke="currentColor"
            width="25"
            height="25"
            viewBox="0 0 576 512"
            class="w-6 h-6 ml-2 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
            ></path>
          </svg>
          <h3 class="text-sm mb-4 flex items-center justify-center blinking">Free shipping over 50€</h3>
        </h2>
        <card-cart></card-cart>
        <card-cart></card-cart>
        <card-cart></card-cart>
        <card-cart></card-cart>
      </div>
      <div class="flex justify-end mt-auto mr-8 mb-5 space-x-4">
        <button class="btn btn-primary">Checkout</button>
        <button class="btn btn-secondary">Edit Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import CardCart from './CardCart.vue';
  export default {
    components: { CardCart },
    setup() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 25%;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

.sidebar:hover h3 {
  opacity: 0.7;
}

@keyframes blinking {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

.blinking {
  animation: blinking 1.5s infinite; 
}
  
  @media screen and (max-width: 640px) {
    .sidebar {
      width: 100%;
    }
  }
  </style>
  