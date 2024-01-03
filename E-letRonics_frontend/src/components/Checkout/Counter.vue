<template>
  <div class="flex items-center sm:flex-row">
    <button @click="decreaseQuantity"
      class="mr-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border  py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">-</button>
    <h1 class="text-2xl text-white mb-4">{{ qty }}</h1>
    <button @click="increaseQuantity"
      class="mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-500 hover:text-white">+</button>
  </div>
</template>

<script>
import { useCartStore } from '../../CartStorePinia.js'; 


export default {
  props: ['qty', 'id'],

  setup(props) {
    const cartStore = useCartStore(); 
    let product = {};

    async function increaseQuantity() {
      const cart = cartStore.cart;
      let found = cart.find(el => el.id === props.id);

      const response = await fetch(`http://127.0.0.1:3333/products/${found.id}`);
      const data = await response.json();
      product.value = data;
      if (product.value.quantity === found.qty) {
        alert('Not enough stock!');
        return;
      }
      if (found) {
        cartStore.cart = cart.map(item => {
          if (item.id === props.id) {
            item.qty++;
          }
          return item;
        });
        cartStore.totalPrice += Number(data.price);
        localStorage.setItem('totalPrice', cartStore.totalPrice);
        localStorage.setItem('cart', JSON.stringify(cartStore.cart));
        cartStore.clearCoupon();
        cartStore.fetchCartItems();
      } else {
        alert('Product not found');
      }
    }

    async function decreaseQuantity() {
      const cart = cartStore.cart;
      let found = cart.find(el => el.id === props.id);

      const response = await fetch(`http://127.0.0.1:3333/products/${found.id}`);
      const data = await response.json();

      if (found && found.qty > 1) {
        cartStore.cart = cart.map(item => {
          if (item.id === props.id) {
            item.qty--;
          }
          return item;
        });
        cartStore.totalPrice -= Number(data.price);
        localStorage.setItem('totalPrice', cartStore.totalPrice);
        localStorage.setItem('cart', JSON.stringify(cartStore.cart));
        cartStore.clearCoupon();
        cartStore.fetchCartItems();
      } else if (found && found.qty === 1) {
        cartStore.cart = cart.filter(item => item.id !== props.id);
        cartStore.totalPrice = 0;
        cartStore.clearCoupon();
        localStorage.setItem('totalPrice', cartStore.totalPrice);
        localStorage.setItem('cart', JSON.stringify(cartStore.cart));
        cartStore.clearCoupon();
        cartStore.fetchCartItems();
      }
    }

    return {
      increaseQuantity,
      decreaseQuantity,
      cartStore, 
    };
  },
};
</script>

<style scoped></style>