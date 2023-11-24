<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          name="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Name"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message
        </label>
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          rows="4"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Add logic to handle form submission
      // You can use an event to notify the parent component
      this.$emit('form-submitted', this.formData);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling for the form if needed */
</style>
