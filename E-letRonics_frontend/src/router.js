import { createRouter, createWebHistory } from 'vue-router';
import { EventBus } from './event-bus.js';

import HomePage from './pages/Home.vue';
import Shop from './pages/Shop.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AboutUs from './pages/AboutUs.vue';
import Checkout from './pages/Checkout.vue';
import ProductList from './components/Product/ProductList.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/About',
    name: 'About',
    component: AboutUs
  },

  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },

  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    EventBus.emit('close-sidecart');
  }
  next();
});

export default router;