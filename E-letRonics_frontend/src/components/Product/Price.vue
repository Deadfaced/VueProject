<template>
  <p class="text-gray-100">{{ formattedPrice }}</p>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const formattedPrice = computed(() => {
      return props.price.toFixed(2) + " €";
    });

    return {
      formattedPrice,
    };
  },
};
</script>

<style scoped>
</style>