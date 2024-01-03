<script setup>
import Navbar from './components/Navigation/Navbar.vue'
import Footer from './components/Navigation/Footer.vue'
</script>

<template>
    <div class="bg-gradient-to-b from-black via-transparent to-indigo-900">
        <Navbar />
        <div class="pageContent flex flex-col min-h-screen">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.pageContent {
    margin-top: 4rem;
}
</style>