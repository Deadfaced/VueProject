import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import ProductGrid from './components/Product/ProductGrid.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductGrid
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;