<template>
  <div class="container mx-8">
    <div class="d-flex flex-wrap">
      <div class="flex-1">
        <ContactForm></ContactForm>
      </div>
      <div class="flex-1">
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
