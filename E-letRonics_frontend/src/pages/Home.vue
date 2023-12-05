<template>
    <div>
        <Hero />
        <GridGallery />
        <TestimonialCard />
        <ContactPage />
    </div>
</template>
  
<script>
import Hero from '../components/Hero.vue';
import GridGallery from '../components/GridGallery.vue';
import TestimonialCard from '../components/TestimonialCard.vue';
import ContactPage from '../components/Contacts/ContactPage.vue';


export default {
    components: {
        Hero,
        GridGallery,
        TestimonialCard,
        ContactPage
    }
}
</script>
  
<style scoped></style>