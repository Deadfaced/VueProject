<template>
  <div class="my-8 mx-8">
    <h2 class="text-2xl font-semibold text-center">Contact Us</h2>
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5 mt-5 max-w-md mx-auto">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          name="name"
          class="input-field bg-slate-900"
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
          class="input-field bg-slate-900"
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
          class="input-field bg-slate-900"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div class="flex items-center justify-end">
        <button class="w-full hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded" type="submit">Send</button>
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
      if (this.validateForm()) {
        this.$emit('form-submitted', this.formData);
        this.showAlert();
      }
    },
    validateForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        alert('Please fill in all fields.');
        return false;
      }
      return true;
    },
    showAlert() {
      alert('Form submitted successfully!\n\nName: ' + this.formData.name + '\nEmail: ' + this.formData.email + '\nMessage: ' + this.formData.message);
    },
  },
};
</script>

<style scoped>
.input-field {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.submit-button {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
