<template>
    <div>
        <Hero class="fall"/>
        <GridGallery />
        <TestimonialCard />
        <div id="contacts" class></div>
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
  
<style scoped>
.fall {
  animation: fallAnimation 1s ease-out;
}

@keyframes fallAnimation {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>