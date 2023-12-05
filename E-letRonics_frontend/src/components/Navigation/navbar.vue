<script setup>
import { ref } from 'vue';
import SideCart from '../Cart/SideCart.vue';

const showSideCart = ref(false);


function toggleSideCart() {
    showSideCart.value = !showSideCart.value;

};

</script>

<template>
    <div class="navbar">
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
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
            </div>
        </div>
        <SideCart v-if="showSideCart" @close="toggleSideCart" />
    </div>
</template>

<style scoped></style>
