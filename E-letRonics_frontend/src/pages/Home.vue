<template>
    <div>
        <Hero />
        <GridGallery />
        <TestimonialCard />
        <ContactPage />
    </div>
</template>
  
<script>
import Hero from '../components/Home/Hero.vue';
import GridGallery from '../components/Home/GridGallery.vue';
import TestimonialCard from '../components/Home/TestimonialCard.vue';
import ContactPage from '../components/Home/Contacts/ContactPage.vue';


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