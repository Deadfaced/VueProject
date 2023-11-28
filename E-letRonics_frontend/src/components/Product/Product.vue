<template>
  <div class="flex justify-center items-center mx-auto">
    <div class="card glass">
      <ImageComponent v-if="item && item.image" :imageUrl="item.image">
        <!-- image slot -->
      </ImageComponent>
      <div class="flex flex-col justify-between items-center w-full h-full p-4">
        <NameComponent :name="item.name">
          <!-- name slot -->
        </NameComponent>

        <DescriptionComponent :description="item.description">
          <!-- description slot -->
        </DescriptionComponent>

        <Price :price="item.price">
          <!-- price slot -->
        </Price>

        <Quantity :quantity="item.quantity">
          <!-- quantity slot -->
        </Quantity>

        <div class="flex flex-col justify-between items-center w-full mt-4">
          <router-link :to="{ name: 'productDetail', params: { id: item.id } }">
            <button class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">
              Read More
            </button>
          </router-link>
          <Rating :rating="item.rating"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchData } from '../../Services/apiService.js';

import ImageComponent from './Image.vue';
import NameComponent from './Name.vue';
import DescriptionComponent from './Description.vue';
import Price from './Price.vue';
import Quantity from './Quantity.vue';
import Rating from './Rating.vue';

export default {
  props: ['item'],
  setup(props) {
    const item = ref(props.item);

    onMounted(async () => {
      try {
        const data = await fetchData(`http://127.0.0.1:3333/products/${props.item.id}`);
        
        item.value = {
          name: data.name,
          description: data.description,
          image: data.image,
          id: data.id,
          price: data.price,
          quantity: data.quantity,
          rating: data.rating,
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
    NameComponent,
    DescriptionComponent,
    Price,
    Quantity,
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
