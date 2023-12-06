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
    getToastOptions() {
      return {
        position: 'top-right',
        timeout: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 600,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: 'button',
        icon: true,
        rtl: false,
        toastClassName: 'dark-toast',
        progressClassName: 'dark-toast',
        theme: 'dark',
      };
    },
  },
};
</script>
<style>
</style>
