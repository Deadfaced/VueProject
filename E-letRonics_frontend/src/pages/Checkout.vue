<template>
  <div>
    <h2 class="text-4xl text-white mt-8 ml-14">My Cart</h2>
  <div class="flex justify-center items-start h-screen space-x-4 mt-4">
    <div class="flex flex-col">
      <div v-for="index in 3" :key="index" class="mb-4">
        <CheckoutCard></CheckoutCard>
      </div>
    </div>
    <div class="flex flex-col">
      <SummaryCard></SummaryCard>
    </div>
  </div>
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