<template>
  <div class="flex justify-center items-center mx-auto">
      <div class="card glass">
      <ImageComponent v-if="item && item.image" :imageUrl="item.image">
        <!-- image slot -->
      </ImageComponent>
      <div class="flex flex-col justify-between items-center w-full h-full p-4">
        <NameComponent :name="item ? item.name : 'Name Unavailable'">
          <!-- name slot -->
        </NameComponent>

        <DescriptionComponent :description="item ? item.description : 'Description Not Available'">
          <!-- description slot -->
        </DescriptionComponent>

        <Price :price="item ? item.price : 0">
          <!-- price slot -->
        </Price>

        <Quantity :quantity="item ? item.quantity : 0">
          <!-- quantity slot -->
        </Quantity>
        <div class="flex flex-col justify-between items-center w-full mt-4">
          <router-link :to="{ name: 'Details', params: { id: item.id } }">
            <button @click="redirectToDetails" class="w-full py-2 px-4 rounded-lg focus:outline-none cursor-pointer bg-gray-600 hover:bg-gray-400 text-white font-semibold mb-2">Details</button>
          </router-link>
            <Rating :rating="item ? item.rating : 0"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from './Image.vue';
import NameComponent from './Name.vue';
import DescriptionComponent from './Description.vue';
import Price from './Price.vue';
import Quantity from './Quantity.vue';
import Rating from './Rating.vue';
import { fetchData } from '../../Services/apiService.js';

export default {
  props: ['item'],
  components: {
    ImageComponent,
    NameComponent,
    DescriptionComponent,
    Price,
    Quantity,
    Rating,
  },
  methods: {
    redirectToDetails() {
    console.log('Redirecting to details', this.item.id);
    this.$router.push({ name: 'Details', params: { id: this.item.id } });
  }
  },
  setup(props) {
    // ...
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