<template>
  <div class="min-h-screen flex flex-col items-center">
    <div class="galaxy">
            <div class="stars1"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
    </div>
    <AboutCard class="mb-8"></AboutCard>
    <div class="grid grid-cols-1 md:grid-cols-3 px-8">
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



  