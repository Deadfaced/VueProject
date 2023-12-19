<template>
  <div class="flex justify-center items-center mx-auto">
      <div class="card glass w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <router-link :to="{ name: 'ProductDetails', params: { id: item.id } }">
        <ImageComponent :imageUrl="item && item.image ? item.image : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'">
      </ImageComponent>
        </router-link>
              <div class="px-5 py-3">
                <router-link :to="{ name: 'ProductDetails', params: { id: item.id } }">
                <NameComponent :name="item ? item.name : 'Name is not available'">
        </NameComponent>
                </router-link>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <DescriptionComponent :description="item ? item.description : 'Description is not Available'">
        </DescriptionComponent>
            </div>
          </div>
          <div class="flex items-center justify-between price">
            <p>  
      </p>
            <Quantity v-if="item && item.quantity < 5" :quantity="item ? item.quantity : 0"></Quantity>
        </div>
        <div class="flex justify-between items-center mt-2.5 mb-5">
          <Rating :rating="item ? item.rating : 0" :maxStars="5"></Rating>
            <Price :price="item ? item.price : 0"></Price>
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
  setup(props) {
  },
};
</script>

<style scoped>
.card {
  transition: all 0.3s ease-in-out;
  max-height: 90vh;
}

.btn {
  transition: all 0.3s ease-in-out;
}

.transition-transform {
  transition: transform 0.5s ease-in-out;
}
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
}
.price {
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
}
</style>