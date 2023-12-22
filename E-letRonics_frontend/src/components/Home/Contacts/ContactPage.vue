<template>
  <div class="container mx-8">
    <div class="lg:flex">
      <div class="w-full lg:w-3/4">
        <ContactForm></ContactForm>
      </div>
      <div class="w-full lg:w-1/4">
        <Map></Map>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';
import Map from './Map.vue';

export default {
  
  components: {
    ContactForm,
    Map,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}
.flex-1 {
  flex: 1;
}
</style>
