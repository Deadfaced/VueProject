<template>
  <div class="text-white min-h-screen flex flex-col mt-10 items-center">
    <AboutCard class="mb-4"></AboutCard>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
      <MissionCard></MissionCard>
      <VisionCard></VisionCard>
      <ValuesCard></ValuesCard>
    </div>
  </div>
</template>
  
  <script>
    import AboutCard from '../components/AboutUs/AboutCard.vue';
    import MissionCard from '../components/AboutUs/MissionCard.vue';
    import ValuesCard from '../components/AboutUs/ValuesCard.vue';
    import VisionCard from '../components/AboutUs/VisionCard.vue';
  export default {
    setup() {
      return {};
    },
    components:{
      AboutCard,
      MissionCard,
      ValuesCard,
      VisionCard
    }
  };
  </script>
  
  <style scoped>
  
</style>



  