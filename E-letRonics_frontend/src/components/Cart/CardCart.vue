<template>
    <div class="bg-base-100 shadow-xl p-4 mt-4 max-w-xs">
        <img :src="image" alt="Item" class="rounded-lg object-cover"/>
      <div class="card-body">
        <h2 class="card-title text-sm">{{ name }}</h2>
        <h2 class="card-title text-sm">Qty: {{ cartQty }}</h2>
        <h2 class="card-title text-sm">Unit Cost: {{ price }}</h2>
        <h2 class="card-title text-sm">{{ availability }}</h2>
        <h2 class="card-title text-sm">Total: {{ totalPrice }}</h2>
        <button @click="removeFromCart()" class="ml-auto mb-4 mr-2 cursor-pointer rounded-md border px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>        
        </button>
      </div>
    </div>
</template>


  

<script>
import Counter from '../Checkout/Counter.vue';
import EventBus from '../../event-bus';
export default {
    props: ['id', 'image', 'name', 'cartQty', 'price', 'availability', 'totalPrice'],
    data() {
        return {
            
        };
    },
    components: {
      Counter
    },
    methods: {
      removeFromCart() {
  console.log('Carrinho antes da remoção:', localStorage.getItem('cart'));

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let foundIndex = cart.findIndex((el) => el.id === this.id);

  if (foundIndex !== -1) {
    console.log('Removendo item com ID:', this.id);
    let removedItem = cart.splice(foundIndex, 1)[0];
    localStorage.setItem('cart', JSON.stringify(cart));
    EventBus.emit('product-removed-from-cart', { quantity: removedItem.qty, id: this.id });

    console.log('Carrinho após a remoção:', localStorage.getItem('cart'));
  } else {
    console.log('Item não encontrado no carrinho. ID:', this.id);
  }
},

  },
}
</script>

<style>
  
</style>