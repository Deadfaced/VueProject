<template>
    <div>
        <Hero />
        <GridGallery />
        <TestimonialCard />
    </div>
</template>
  
<script>
import Hero from '../components/Hero.vue';
import GridGallery from '../components/GridGallery.vue';
import TestimonialCard from '../components/TestimonialCard.vue';


export default {
    components: {
        Hero,
        GridGallery,
        TestimonialCard
    }
}
</script>
  
<style scoped></style>