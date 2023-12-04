<template>
    <h1>{{ this.$route.params.id }}</h1>
  <div class="flex justify-center items-center mx-auto p-8">
    <div class="flex">
      <div class="w-1/2 pr-8">
        <img src="https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg" alt="Product Image" />
      </div>

      <div class="w-1/2">
        <h2 class="text-3xl font-semibold mb-4">{{ product.name }}</h2>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <div class="flex items-center mb-4">
          <span class="text-xl font-semibold text-gray-800 mr-2">${{ product.price }}</span>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            <h1>rating</h1>
          </span>
        </div>

        <!-- Controles de Quantidade -->
        <div class="flex items-center mb-4">
          <button @click="decreaseQuantity" class="quantity-button">-</button>
          <span class="mx-2 text-lg">{{ quantity }}</span>
          <button @click="increaseQuantity" class="quantity-button">+</button>
        </div>

        <!-- Botões de Ação -->
        <div class="flex">
          <button @click="addToCart" class="action-button bg-blue-600 text-white">Add to Cart</button>
          <button @click="showMoreDetails" class="action-button bg-gray-300 text-gray-700 ml-2">More Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
      product: null,
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
    // Método para buscar os detalhes do produto com base no ID da rota
    fetchProductDetails() {
      const productId = this.$route.params.id;
      // Substitua a chamada abaixo pela lógica real para buscar os detalhes do produto
      // Exemplo: this.product = productService.getProductDetails(productId);
    },
  },
  // Use o hook created para chamar o método fetchProductDetails quando o componente for criado
  created() {
    this.fetchProductDetails();
  },
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
