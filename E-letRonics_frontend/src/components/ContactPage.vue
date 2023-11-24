<template>
    <div class="flex flex-col justify-center items-center mx-auto">
      <h1 class="text-3xl font-semibold mb-8">Get in Touch</h1>
      <div class="flex flex-wrap gap-8">
        <ContactForm @form-submitted="handleFormSubmission" class="flex-1"></ContactForm>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from './ContactForm.vue';
  import ContactInformation from './ContactInformation.vue';
  import Map from './Map.vue';
  
  export default {
    methods: {
      handleFormSubmission(formData) {
        // Implement logic to handle the form data
        console.log('Form submitted:', formData);
        // You can send the data to a server, display a confirmation message, etc.
      },
    },
    components: {
      ContactForm,
      ContactInformation,
      Map,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling for the contact page if needed */
  .container {
    max-width: 1200px;
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
  