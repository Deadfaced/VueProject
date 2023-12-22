<template>
  <div class="container mx-auto mt-8 pt-4">
    <div class="flex flex-wrap">
      <div class="flex-1">
        <ContactForm></ContactForm>
      </div>
      <div class="flex-1">
        <ContactInformation></ContactInformation>
        <Map></Map>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from './ContactForm.vue';
import ContactInformation from './ContactInformation.vue';
import Map from './Map.vue';

export default {
  
  components: {
    ContactForm,
    ContactInformation,
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
