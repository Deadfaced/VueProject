import { createRouter, createWebHistory } from 'vue-router';
import ProductGrid from './components/Product/ProductGrid.vue';
import ProductDetail from './components/Product/ProductDetail.vue';

const routes = [
  { path: '/', component: ProductGrid },
  { path: '/product/:id', component: ProductDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;