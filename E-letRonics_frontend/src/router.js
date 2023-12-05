import { createRouter, createWebHistory } from 'vue-router';
import { EventBus } from './event-bus.js';

import HomePage from './pages/Home.vue';
import ProductGrid from './components/Product/ProductGrid.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AboutUs from './pages/AboutUs.vue';
import Checkout from './pages/Checkout.vue';

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
    path: '/products',
    name: 'products',
    component: ProductGrid,
  },
  {
    path: '/testClaudio',
    name: 'testClaudio',
    component: () => import('./components/Contacts/ContactPage.vue'),
  },
  {
    path: '/testLazera',
    name: 'testLazera',
    component: () => import(''),
  },
  {
    path: '/testDaniel',
    name: 'testDaniel',
    component: () => import(''),
  },
  {
    path: '/testBernardo',
    name: 'testBernardo',
    component: () => import(''),
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