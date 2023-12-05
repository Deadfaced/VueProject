<script setup>
import Navbar from './components/Navigation/Navbar.vue'
import Footer from './components/Navigation/Footer.vue'
</script>

<template>
    <Navbar/>
    <router-view></router-view>
    <Footer/>
</template>

<style scoped>
</style>