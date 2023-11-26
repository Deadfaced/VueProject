<template>
  <div class="flex justify-center items-center mx-auto">
    <div class="card glass">
      <ImageComponent>
        <template #default>
          <img class="w-full h-auto transition-transform transform hover:scale-105" :src="imageUrl" :alt="imageAlt" />
        </template>
      </ImageComponent>

      <div class="flex flex-col justify-between items-center w-full h-full p-4">
        <TitleComponent>
          {{ itemTitle }}
        </TitleComponent>

        <DescriptionComponent>
          {{ itemDescription }}
        </DescriptionComponent>

        <div class="flex flex-col justify-between items-center w-full mt-4">
          <button class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">Learn Now!</button>
          <Rating></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ImageComponent from './ProductImage.vue';
import TitleComponent from './Title.vue';
import DescriptionComponent from './ProductDescription.vue';
import Rating from '../Rating.vue';

export default {
  setup() {
    const imageUrl = ref('https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg');
    const imageAlt = ref('PC');
    const itemTitle = ref('Life Hack');
    const itemDescription = ref('Discover the art of parking your car in your garage with ease.');

    return {
      imageUrl,
      imageAlt,
      itemTitle,
      itemDescription,
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
