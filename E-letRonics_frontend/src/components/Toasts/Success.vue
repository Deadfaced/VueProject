<template>
    <div></div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { EventBus } from '../../event-bus.js';

export default {
  name: 'Success',
  methods: {
    showToast(data) {
      const message = `Added ${data.quantity} units of "${data.product.name}" to cart!`;
      toast.success(message, this.getToastOptions());
    },
    getToastOptions() {
      return {
        position: 'top-right',
        timeout: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 600,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        icon: true,
        rtl: false,
        toastClassName: 'dark-toast',
        progressClassName: 'dark-toast',
        theme: 'dark',
      };
    },
  },
  created() {
    EventBus.on('product-added-to-cart', this.showToast);
  },
  beforeUnmount() {
    EventBus.off('product-added-to-cart', this.showToast);
  },
};
</script>

<style>
</style>