<template>
    <span class="quantity text-red-700 absolute z-10 bottom-2">{{ quantity }} left</span>
  </template>
  
  <script>
  export default {
    props: ['quantity'],
  };
  </script>
  
  <style scoped>
  </style>
  