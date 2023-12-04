import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import ProductGrid from './components/Product/ProductGrid.vue';
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
    props: true,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductGrid,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;