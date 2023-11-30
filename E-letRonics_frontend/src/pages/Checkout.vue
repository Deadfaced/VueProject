<template>
<div class="flex justify-center items-center h-screen">
  <CheckoutCard></CheckoutCard>
  <SummaryCard></SummaryCard>
</div>
</template>

<script>
 import CheckoutCard from '../components/Checkout/CheckoutCard.vue';
 import SummaryCard from '../components/Checkout/SummaryCard.vue';
export default {
  components: { SummaryCard, CheckoutCard},
  data() {
    return {
      
        }
    }
};

</script>

<style scoped>

</style>