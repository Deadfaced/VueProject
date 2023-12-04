<template>
    <p class="quantity text-red-700">Only {{ quantity }} left</p>
  </template>
  
  <script>
  export default {
    props: ['quantity'],
  };
  </script>
  
  <style scoped>
  </style>
  