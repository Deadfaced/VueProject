<template>
    <button type="button" @click="$event => showToast()" class="btn btn-info"></button>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
    export default {
        mmethods: {
            showToast() {
                toast.success('Failure Toast', {
                    position: 'top-right',
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 600,
                    showCloseButtonOnHover: false,
                    hideProgressBar: false,
                    closeButton: 'button',
                    icon: true,
                    rtl: false,
                });
            },
        },
    }
</script>
