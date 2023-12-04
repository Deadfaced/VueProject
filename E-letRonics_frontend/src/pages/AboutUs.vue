<template>
  <div class="text-white min-h-screen flex items-center bg-cover" style="background-image: url('https://images.unsplash.com/photo-1530362502708-d02c8f093039?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
    <div class="max-w-lg w-1/2 p-8 rounded-md">
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
          <h2 class="text-xl font-semibold mb-2 neon-bounce-text">Mission</h2>
          <p>Enhance connectivity and facilitate access to innovation, offering electronic products of exceptional quality that enrich people's lives, promote efficiency and inspire technological evolution, always focusing on sustainability and customer satisfaction.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="100" height="100" class="group-hover:text-green-500 ml-28"><g fill="none"><path d="M17.603 7.519a7.999 7.999 0 1 1-5.117-5.126L11.438 3.44c-.058.057-.11.12-.158.185a6.5 6.5 0 1 0 5.088 5.098a1.5 1.5 0 0 0 .192-.162l1.042-1.042zM14.898 9A5 5 0 1 1 11 5.1v1.546A3.5 3.5 0 1 0 13.353 9h1.545zm-4.9 2.5a1.5 1.5 0 0 0 1.45-1.887L13.03 8.03L13.06 8H15.5a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 17.5 5H15V2.5a.5.5 0 0 0-.853-.354l-2 2A.5.5 0 0 0 12 4.5v2.44a.763.763 0 0 0-.03.03L10.388 8.55a1.501 1.501 0 0 0-1.89 1.45a1.5 1.5 0 0 0 1.5 1.5z" fill="currentColor"></path></g></svg>   
         </div>
      
      <div class="group cursor-pointer transition-opacity">
        <div class="p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 class="text-xl font-semibold mb-2 neon-bounce-text">Vision</h2>
          <p>To be recognized as the undisputed leader in the electronics market, standing out for excellence in innovation, design and performance. We constantly seek to exceed customer expectations, driving technological development.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512" width="100" height="100" class="group-hover:text-green-500 ml-28"><path d="M288 144a110.94 110.94 0 0 0-31.24 5a55.4 55.4 0 0 1 7.24 27a56 56 0 0 1-56 56a55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" fill="currentColor"></path></svg>     
       </div>
      
      <div class="group cursor-pointer transition-opacity">
        <div class="p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 class="text-xl font-semibold mb-2 neon-bounce-text">Values</h2>
          <p>-Relentless Innovation: We constantly seek innovative electronic solutions.</p>
          <p>-Unquestionable Quality: We are committed to excellence and durability in each product.</p>
          <p>-Customer First: We prioritize customer needs to ensure complete satisfaction.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512" width="100" height="100" class="group-hover:text-green-500 ml-28"><path d="M271.06 144.3l54.27 14.3a8.59 8.59 0 0 1 6.63 8.1c0 4.6-4.09 8.4-9.12 8.4h-35.6a30 30 0 0 1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3 2l-19 17.5a11.68 11.68 0 0 0-2.25 2.66a11.42 11.42 0 0 0 3.88 15.74a83.77 83.77 0 0 0 34.51 11.5V240c0 8.8 7.83 16 17.37 16h17.37c9.55 0 17.38-7.2 17.38-16v-17.6c32.93-3.6 57.84-31 53.5-63c-3.15-23-22.46-41.3-46.56-47.7l-54.27-14.3a8.59 8.59 0 0 1-6.63-8.1c0-4.6 4.09-8.4 9.12-8.4h35.6A30 30 0 0 1 332 83.1c5.23 2.2 11.28 1.7 15.3-2l19-17.5a11.31 11.31 0 0 0 2.17-2.6a11.43 11.43 0 0 0-3.84-15.78a83.82 83.82 0 0 0-34.52-11.5V16c0-8.8-7.82-16-17.37-16h-17.37C285.82 0 278 7.2 278 16v17.6c-32.89 3.6-57.85 31-53.51 63c3.14 23 22.51 41.3 46.57 47.7zm294.21 183.8c-11.8-10.7-30.2-10-42.6 0l-92.4 73.9a63.64 63.64 0 0 1-40 14H272a16 16 0 0 1 0-32h78.29c15.9 0 30.71-10.9 33.25-26.6a31.2 31.2 0 0 0 .46-5.46A32 32 0 0 0 352 320H192a117.66 117.66 0 0 0-74.1 26.29L71.4 384H16a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h356.77a64 64 0 0 0 40-14L564 377a32 32 0 0 0 1.28-48.9z" fill="currentColor"></path></svg>     
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



  