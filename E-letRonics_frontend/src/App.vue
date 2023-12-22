<script setup>
import Navbar from './components/Navigation/Navbar.vue'
import Footer from './components/Navigation/Footer.vue'
</script>

<template>
    <Navbar />
    <div class="flex flex-col min-h-screen">
        <router-view></router-view>
    </div>
    <Footer />
</template>

<style scoped>
</style>