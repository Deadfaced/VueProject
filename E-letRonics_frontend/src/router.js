import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import ProductDetails from './pages/ProductDetails.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;