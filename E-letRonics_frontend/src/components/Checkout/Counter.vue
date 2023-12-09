<template>
    <div class="flex items-center sm:flex-row">
        <button @click="decreaseQuantity" class="mr-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">-</button>
        <h1 class="text-2xl text-white mb-4">{{ quantity }}</h1>
        <button @click="increaseQuantity" class="mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-green-500 hover:text-white">+</button>
    </div>
</template>

<script>
export default {
  props: ['qty', 'id'],
  data() {
    return {
      quantity: this.qty, 
    };
  },
  methods: {
    increaseQuantity() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      let found = cart.find(el => el.id === this.id);
      
      if (found) {
        this.quantity++;
        found.qty++;
      } else {
        alert('Produto não encontrado');
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
        let found = cart.find(el => el.id === this.id);
        
        if (found) {
          this.quantity--;
          found.qty--;
          
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
      }
      else if(this.quantity == 1){
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
      
        let found = cart.find(el => el.id === this.id);
        
        if (found) {
          cart = cart.filter(item => item.id !== this.id);
          this.quantity--;
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      location.reload();
    },
  },
};
</script>

<style scoped>

</style>