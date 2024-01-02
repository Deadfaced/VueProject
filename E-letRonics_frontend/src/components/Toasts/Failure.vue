<template>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { EventBus } from '../../event-bus.js';

export default {
  props: {
    failureMessage: {
    type: String,
    default: 'Successfully removed from cart',
  },
  },
  methods: {
    showToast() {
      toast.error(this.failureMessage, this.getToastOptions());
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
    couponToast() {
      const message = `Coupon does not exist!`;
      toast.error(message, this.getToastOptions());
    },
  },
  created() {
    EventBus.on('product-removed-from-cart-failed', this.showToast);
  },
  beforeUnmount() {
    EventBus.off('product-removed-from-cart-failed', this.showToast);
  },
};
</script>


<style></style>
