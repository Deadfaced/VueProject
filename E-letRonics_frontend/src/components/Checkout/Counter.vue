<template>
  <div class="flex items-center sm:flex-row">
    <button @click="decreaseQuantity"
      class="mr-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">-</button>
    <h1 class="text-2xl text-white mb-4">{{ quantity }}</h1>
    <button @click="increaseQuantity"
      class="mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-500 hover:text-white">+</button>
  </div>
</template>

<script>
import EventBus from '../../event-bus';

export default {
  props: ['qty', 'id'],
  data() {
    return {
      quantity: this.qty,
      totalPrice: parseInt(localStorage.getItem('totalPrice')) || 0,
      cartItemCount: parseInt(localStorage.getItem('cartItemCount')) || 0,
    };
  },

  methods: {
    async increaseQuantity() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      let found = cart.find(el => el.id === this.id);

      const response = await fetch(`http://127.0.0.1:3333/products/${found.id}`);
      const data = await response.json();
      if (found) {
        this.quantity++;
        found.qty++;
        this.cartItemCount++;
        this.totalPrice += parseInt(data.price);
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', this.totalPrice);
        localStorage.setItem('cartItemCount', this.cartItemCount);
        EventBus.emit('product-added-to-cart', { quantity: 1, totalPrice: this.totalPrice });

        localStorage.removeItem('couponCode');
        localStorage.removeItem('discountPercentage');
        localStorage.removeItem('discountValue');
      } else {
        alert('Product not found');
      }
    },

    async decreaseQuantity() {
      if (this.quantity > 1) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = parseInt(localStorage.getItem('totalPrice')) || 0;
        let cartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;

        let found = cart.find(el => el.id === this.id);

        if (found) {
          const response = await fetch(`http://127.0.0.1:3333/products/${found.id}`);
          const data = await response.json();

          this.quantity--;
          found.qty--;
          cartItemCount--;
          totalPrice -= parseInt(data.price);
          localStorage.setItem('cart', JSON.stringify(cart));
          localStorage.setItem('totalPrice', totalPrice.toString());
          this.totalPrice = totalPrice;
          this.cartItemCount = cartItemCount;
          EventBus.emit('product-quantity-decreased', { quantity: 1, price: data.price, totalPrice: totalPrice });

          localStorage.removeItem('couponCode');
          localStorage.removeItem('discountPercentage');
          localStorage.removeItem('discountValue');
        }
        localStorage.setItem('cartItemCount', cartItemCount.toString());
      }
      else if (this.quantity === 1) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = parseInt(localStorage.getItem('totalPrice')) || 0;
        let cartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;

        let found = cart.find(el => el.id === this.id);

        if (found) {
          cart = cart.filter(item => item.id !== this.id);
          this.quantity--;
          cartItemCount--;
          this.totalPrice = 0;
          localStorage.setItem('totalPrice', '0');
          EventBus.emit('product-quantity-decreased', { quantity: 1, totalPrice: this.totalPrice });

          localStorage.removeItem('couponCode');
          localStorage.removeItem('discountPercentage');
          localStorage.removeItem('discountValue');
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartItemCount', cartItemCount.toString());
        EventBus.emit('product-removed-from-cart', { quantity: 1, id: this.id });
      }
    },
  },
};
</script>

<style scoped></style>