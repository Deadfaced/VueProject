<script setup>
import Navbar from './components/Navigation/Navbar.vue'
import Footer from './components/Navigation/Footer.vue'
</script>

<template>
    <Navbar />
    <div class="pageContent flex flex-col min-h-screen">
        <router-view></router-view>
    </div>
    <Footer />
</template>

<style scoped>
    .pageContent {
        margin-top: 4rem;
    }
</style>