import { createRouter, createWebHistory } from 'vue-router';
import ProductGrid from './components/Product/ProductGrid.vue';
import ProductDetails from './components/Product/Details.vue';

const routes = [
  { path: '/', component: ProductGrid },
  { path: '/product/:id', name: 'productDetails', component: ProductDetails, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;