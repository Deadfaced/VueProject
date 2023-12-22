<template>
  <div>
    <Success></Success>
    <Failure></Failure>
    <h2 class="text-4xl text-white mt-8 ml-14">My Cart</h2>
    <div class="flex justify-center items-start h-screen space-x-4 mt-4">
      <div class="flex flex-col">
        <div v-for="item in shoppingCart" :key="item.id" class="mb-4">
          <CheckoutCard :id="item.id" :image="item.image" :name="item.name" :description="item.description"
            :price="item.price" :cartQty="item.cartQty" :item="item"></CheckoutCard>
        </div>
        <div class="flex justify-between mt-4 mb-8">
          <router-link to="/" class="bg-gray-700 text-white px-4 py-2 rounded-md ml-4">Back</router-link>
          <button @click="removeAllFromCart" class="bg-gray-700 text-white px-4 py-2 rounded-md mr-4">Empty Cart</button>
        </div>
      </div>
      <div class="flex flex-col">
        <SummaryCard></SummaryCard>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutCard from '../components/Checkout/CheckoutCard.vue';
import SummaryCard from '../components/Checkout/SummaryCard.vue';
import EventBus from '../event-bus';
import Success from '../components/Toasts/Success.vue';
import Failure from '../components/Toasts/Failure.vue';

export default {
  components: { SummaryCard, CheckoutCard, Success, Failure },
  data() {
    return {
      shoppingCart: [],
    }
  },

  async mounted() {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    this.shoppingCart = [];
    for (const element of cartList) {
      const response = await fetch(`http://127.0.0.1:3333/products/${element.id}`);
      const data = await response.json();
      this.shoppingCart.push({
        id: element.id,
        image: data.image,
        name: data.name,
        description: data.description,
        price: data.price + "€",
        cartQty: element.qty,
      });
    }
    this.calculateTotalPrice();
    
    let cartQty = 0;
    let totalPrice = 0;
    for (const item of this.shoppingCart) {
      cartQty += item.cartQty;
      totalPrice += parseFloat(item.totalPrice);
    }
  },

  created() {
    EventBus.on('product-removed-from-cart', eventData => {
      this.cartRemove(eventData);
    });
  },
  methods: {
    removeAllFromCart() {
      localStorage.removeItem('cart');
      this.shoppingCart = [];
      EventBus.emit('all-products-removed');
    },

    cartRemove(itemToRemove) {
      this.shoppingCart = this.shoppingCart.filter(item => item.id !== itemToRemove.id);
    },

    calculateTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.shoppingCart.length; i++) {
        totalPrice += parseFloat(this.shoppingCart[i].price) * this.shoppingCart[i].cartQty;
        console.log(totalPrice);
      }
      localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    },
  },
};
</script>

<style scoped></style>