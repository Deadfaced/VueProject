<template>
  <div class="flex justify-center items-center mx-auto">
      <div class="card glass w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ImageComponent :imageUrl="item && item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'">
      </ImageComponent>
              <div class="px-5 py-3">
                <NameComponent :name="item ? item.name : 'Name is not available'">
        </NameComponent>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse ">
              <DescriptionComponent :description="item ? item.description : 'Description is not Available'">
        </DescriptionComponent>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p>  
        <Price :price="item ? item.price : 0">
        </Price>
      </p>
            <Quantity v-if="item && item.quantity < 5" :quantity="item ? item.quantity : 0"></Quantity>
        </div>
        <Rating :rating="item ? item.rating : 0"></Rating>
          <div class="flex items-center justify-between action-container">
            <router-link :to="{ name: 'ProductDetails', params: { id: item.id } }">
              <button class="action-button">Details</button>
            </router-link>
            <button class="action-button">Add to Cart</button>
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