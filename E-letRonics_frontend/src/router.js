import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;