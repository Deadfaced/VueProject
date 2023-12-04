<template>
  <h1>{{ this.$route.params.id }}</h1>
  
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart() {
      // Implementar a lógica de adicionar ao carrinho
    },
    showMoreDetails() {
      // Implementar a lógica para mostrar mais detalhes do produto
    },
  },
  props: ['item'],
};
</script>

<style scoped>
.quantity-button {
  background-color: #4a5568;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.action-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #cbd5e0;
}
</style>