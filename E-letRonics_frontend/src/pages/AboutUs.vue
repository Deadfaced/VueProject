<template>
  <div class="text-white min-h-screen flex items-center bg-cover" style="background-image: url('https://images.unsplash.com/photo-1529526013826-d9eddeb1bc9e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
    <div class="max-w-lg w-1/2 bg-black bg-opacity-70 p-8 rounded-md">
      <h1 class="text-4xl md:text-6xl font-semibold leading-normal mb-6 neon-bounce-text">E-letRonics</h1>
      <p class="mb-4">
        We are an electrical components store created by four students passionate about the world of technology. We combine academic knowledge and enthusiasm to offer the best products and an exceptional shopping experience.
      </p>
      <p class="mb-4">
        Explore our catalog and discover the quality that only a committed team can provide.
      </p>
    </div> 

     <!-- Cards -->
     <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-1/2">
      <div class="group cursor-pointer transition-opacity">
        <div class="p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 class="text-xl font-semibold mb-2">Mission</h2>
          <p>Enhance connectivity and facilitate access to innovation, offering electronic products of exceptional quality that enrich people's lives, promote efficiency and inspire technological evolution, always focusing on sustainability and customer satisfaction.</p>
        </div>
        <svg class="text-white group-hover:text-green-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
      </div>
      
      <div class="group cursor-pointer transition-opacity">
        <div class="p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 class="text-xl font-semibold mb-2">Vision</h2>
          <p>To be recognized as the undisputed leader in the electronics market, standing out for excellence in innovation, design and performance. We constantly seek to exceed customer expectations, driving technological development.</p>
        </div>
        <svg class=" text-white group-hover:text-green-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
      </div>
      
      <div class="group cursor-pointer transition-opacity">
        <div class="p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 class="text-xl font-semibold mb-2">Values</h2>
          <p>-Relentless Innovation: We constantly seek innovative electronic solutions.</p>
          <p>-Unquestionable Quality: We are committed to excellence and durability in each product.</p>
          <p>-Customer First: We prioritize customer needs to ensure complete satisfaction.</p>
        </div>
        <svg class=" text-white group-hover:text-green-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    setup() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  @keyframes neonBounceEffect {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
      text-shadow: 0 0 2px #00ff00, 0 0 4px #00ff00, 0 0 6px #00ff00, 0 0 8px #00ff00, 0 0 10px #00ff00;
    }
    40% {
      transform: translateY(-5px);
      text-shadow: 0 0 4px #00ff00, 0 0 6px #00ff00, 0 0 8px #00ff00, 0 0 10px #00ff00, 0 0 12px #00ff00;
    }
    60% {
      transform: translateY(-2px);
      text-shadow: 0 0 6px #00ff00, 0 0 8px #00ff00, 0 0 10px #00ff00, 0 0 12px #00ff00, 0 0 14px #00ff00;
    }
  }
  
  .neon-bounce-text {
    animation: neonBounceEffect 2.5s ease-in-out infinite;
  }
</style>



  