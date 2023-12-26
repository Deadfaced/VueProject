<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${image})` }">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-lg text-white">
                <h1 class="text-7xl font-bold ">Welcome to</h1>
                <h1 class="mb-5 text-7xl font-bold ">E-letRonics</h1>
                <p class="mb-5 text-2xl">The only tech shop you will ever need !</p>
                <router-link to="/Shop" class="btn btn-primary text-white">Start Shopping</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import heroImage from '../../assets/images/hero.jpg'; 

export default {
    data() {
        return {
            image: heroImage,
        };
    },
};
</script>

<style scoped></style>