<template>
  <div class="flex justify-center items-center mx-auto">
    <div class="card glass">
      <ImageComponent :imageUrl="item.imageUrl" />

      <div class="flex flex-col justify-between items-center w-full h-full p-4">
        <TitleComponent :title="item.title" />
        <DescriptionComponent :description="item.description" />

        <div class="flex flex-col justify-between items-center w-full mt-4">
          <button class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">Read More</button>
          <Rating></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchData } from '../../Services/apiService.js';

import ImageComponent from './ProductImage.vue';
import TitleComponent from './Title.vue';
import DescriptionComponent from './ProductDescription.vue';
import Rating from '../Rating.vue';

export default {
  setup() {
    const item = ref({});

    onMounted(async () => {
      try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1', 'https://picsum.photos/200/300');
        
        item.value = {
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
        };
      } catch (error) {
        console.error('Error calling API:', error);
      }
    });

    return {
      item,
    };
  },
  components: {
    ImageComponent,
    TitleComponent,
    DescriptionComponent,
    Rating,
  },
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease-in-out;
}

.btn {
  transition: all 0.3s ease-in-out;
}

.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>
