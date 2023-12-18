<template>
</template>
  
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { EventBus } from '../../event-bus.js';

export default {
  methods: {
    showToast(message) {
      toast.error(message, this.getToastOptions());
    },
    couponToast() {
      const message = `Coupon does not exist!`;
      toast.error(message, this.getToastOptions());
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
    EventBus.on('coupon-applied-failed', this.couponToast);
  },
  beforeUnmount() {
    EventBus.off('coupon-applied-failed', this.couponToast);
  },
};
</script>


<style></style>
