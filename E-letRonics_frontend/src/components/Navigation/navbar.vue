<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SideCart from '../Cart/SideCart.vue';
import EventBus from '../../event-bus';

const showSideCart = ref(false);
const cartItemCount = ref(parseInt(localStorage.getItem('cartItemCount')) || 0);


function toggleSideCart() {
    showSideCart.value = !showSideCart.value;

};

onMounted(() => {
    EventBus.on('product-added-to-cart', eventData => {
        cartItemCount.value += eventData.quantity;
        localStorage.setItem('cartItemCount', cartItemCount.value.toString());
    });

    EventBus.on('product-removed-from-cart', eventData => {
        cartItemCount.value -= eventData.quantity;
        if (cartItemCount.value < 0) cartItemCount.value = 0;
        localStorage.setItem('cartItemCount', cartItemCount.value.toString());
    });

    EventBus.on('all-products-removed', () => {
        cartItemCount.value = 0;
        localStorage.setItem('cartItemCount', '0');
    });

    EventBus.on('update-cart-count', (updatedItemCount) => {
      cartItemCount.value = updatedItemCount;
    });
});

onBeforeUnmount(() => {
    EventBus.off('product-added-to-cart');
    EventBus.off('product-removed-from-cart');
    EventBus.off('all-products-removed');
    EventBus.off('update-cart-count');
});
</script>

<template>
    <div class="navbar bg-neutral">
        <div class="flex-1">
            <router-link to="/" class="btn btn-ghost text-xl">Home</router-link>
            <router-link to="/About" class="btn btn-ghost text-xl">About</router-link>
            <a class="btn btn-ghost text-xl">Contact</a>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle" @click="toggleSideCart">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="cartIcon" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">{{ cartItemCount }}</span>
                    </div>
                </label>
            </div>
        </div>
        <SideCart v-if="showSideCart" @close="toggleSideCart" />
    </div>
</template>

<style>
    .navbar{
        top: 0;
        position: fixed;
        z-index: 1000;
    }
</style>
