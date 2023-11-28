<template>
  <div class="flex justify-center items-center mx-auto">
    <div class="card glass">
      <ImageComponent v-if="item && item.imageUrl" :imageUrl="item.imageUrl">
        <!-- Slot for Image content -->
      </ImageComponent>
      <div class="flex flex-col justify-between items-center w-full h-full p-4">
        <TitleComponent :title="item.title">
          <!-- Slot for Title content -->
        </TitleComponent>

        <DescriptionComponent :description="item.description">
          <!-- Slot for Description content -->
        </DescriptionComponent>

        <div class="flex flex-col justify-between items-center w-full mt-4">
          <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
            <button class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">
              Read More
            </button>
          </router-link>
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
  props: ['item'],
  setup(props) {
    const item = ref(props.item);

    onMounted(async () => {
      try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1', 'https://picsum.photos/200/300');
        
        item.value = {
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          id: props.item.id,
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
