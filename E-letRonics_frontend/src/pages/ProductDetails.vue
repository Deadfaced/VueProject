<template>
  <div class="product-details-container">
    <Success />
    <div class="product-details-content" v-if="product">
      <div class="product-image-container">
        <img :src="product.image || 'https://example.com/placeholder.jpg'" alt="Product Image" class="product-image">
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>

        <div class="product-meta">
          <span class="product-price">${{ product.price }}</span>
          <span class="product-rating">Rating: {{ product.rating }}.0</span>
        </div>

        <div class="quantity-controls">
          <button @click="decreaseQuantity" class="quantity-button">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="increaseQuantity" class="quantity-button">+</button>
          <div class="action-buttons">
          <button @click="addToCart" class="action-button add-to-cart">Add to Cart</button>
          <router-link to="/Shop" class="action-button back-to-products">Back to Products</router-link>
        </div>
        </div>

        
      </div>
    </div>
  </div>
  <h1 class="text-2xl font-bold mt-8 mb-4">Reviews</h1>
    <div class="testimonials-container">
      <div class="testimonials-container mt-12">
        <div class="testimonial flex items-center bg-white p-8 rounded-lg shadow-lg">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" class="testimonial-avatar rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-gray-800 text-lg">"This product is amazing! It completely changed my life. I can't imagine my day without it."</p>
            <p class="testimonial-author text-gray-600 italic mt-2">- John Doe</p>
          </div>
        </div>
        <div class="testimonial flex items-center bg-white p-8 rounded-lg shadow-lg mt-4">
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar" class="testimonial-avatar rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-gray-800 text-lg">"I was skeptical at first, but after using this product, I'm a true believer. It exceeded my expectations."</p>
            <p class="testimonial-author text-gray-600 italic mt-2">- Jane Smith</p>
          </div>
        </div>
        <div class="testimonial flex items-center bg-white p-8 rounded-lg shadow-lg mt-4">
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User Avatar" class="testimonial-avatar rounded-full mr-4 w-16 h-16">
          <div>
            <p class="text-gray-800 text-lg">"Life before this product and after are two completely different things. I highly recommend it!"</p>
            <p class="testimonial-author text-gray-600 italic mt-2">- Mike Johnson</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Success from '../components/Toasts/Success.vue';
import EventBus from '../event-bus.js';
export default {
    data() {
        return {
            quantity: 1,
            product: Object,
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
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            let found = cart.find(el => el.id === this.product.id);
            if (found) {
                found.qty += this.quantity;
            }
            else {
                cart.push({ id: this.product.id, qty: this.quantity });
            }
            EventBus.emit('product-added-to-cart', {
                product: this.product,
                quantity: this.quantity
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        },
        showToast(data) {
            const message = `Added ${data.quantity} units of "${data.product.name}" to cart!`;
            toast.success(message, this.getToastOptions());
        },
        async fetchProductDetails() {
            try {
                const productId = this.$route.params.id;
                const response = await fetch(`http://127.0.0.1:3333/products/${productId}`);
                const data = await response.json();
                this.product = data;
            }
            catch (error) {
                console.error('Error calling API:', error);
            }
        },
    },
    created() {
        this.fetchProductDetails();
    },
    components: { 
      Success 
    }
};
</script>

<style scoped>
.product-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.product-details-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-image-container {
  flex: 1;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
  padding: 20px;
}

.product-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-description {
  color: #555;
  margin-bottom: 1.5rem;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.product-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #888;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.quantity-button {
  background-color: #4a5568;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 999px;
}

.quantity {
  margin: 0 1rem;
  font-size: 1.5rem;
}

.product-rating {
  font-size: 1.2rem;
  color: #555;
}

.action-buttons {
  display: flex;
}

.action-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
  border-radius: 999px;
}

.add-to-cart {
  background-color: #1a202c;
  color: white;
}

.back-to-products {
  background-color: #cbd5e0;
  color: #4a5568;
}

.action-button:hover {
  background-color: #cbd5e0;
}


.testimonials-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.testimonial {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
}

.testimonial p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-style: italic;
  color: #888;
  font-size: 0.8rem;
}


@media (min-width: 768px) {
  .product-details-content {
    flex-direction: row;
  }

  .product-info {
    text-align: left;
  }
}
</style>
