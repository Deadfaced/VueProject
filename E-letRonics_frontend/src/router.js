import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';

const routes = [
<<<<<<< HEAD
  { path: '/', component: ProductGrid },
  { path: '/product/:id', name: 'productDetails', component: ProductDetails, props: true },
=======
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // other routes...
>>>>>>> 1b0c8f24ee71cce01efd596326ac26b4142eacb8
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;