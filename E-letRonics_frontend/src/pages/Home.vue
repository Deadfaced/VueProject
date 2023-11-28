<template>
    <div>
        <Navbar />
        <Hero />
        <GridGallery />
        <TestimonialCard />
    </div>
</template>
  
<script>
import Navbar from '../components/Navigation/Navbar.vue';
import Hero from '../components/Hero.vue';
import GridGallery from '../components/GridGallery.vue';
import TestimonialCard from '../components/TestimonialCard.vue';


export default {
    components: {
        Navbar,
        Hero,
        GridGallery,
        TestimonialCard
    }
}
</script>
  
<style scoped></style>