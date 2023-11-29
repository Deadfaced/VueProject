import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import ProductGrid from './components/Product/ProductGrid.vue';


const routes = [
<<<<<<< HEAD

=======
>>>>>>> 041450ec74c19373f41364d13c5ad0ddd7c6f453
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
<<<<<<< HEAD
  // other routes...

=======
  {
    path: '/products',
    name: 'Products',
    component: ProductGrid
  },
>>>>>>> 041450ec74c19373f41364d13c5ad0ddd7c6f453
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;