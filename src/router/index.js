import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JewelryProduct from '../components/JewelryProduct.vue'; // Import the JewelryProduct component

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/jewelry/:id', // Add a dynamic segment for the jewelry product ID
    name: 'jewelry',
    component: JewelryProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
