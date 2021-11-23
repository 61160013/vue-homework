import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './components/profile.vue';
const routes = [{ path: '/', name: 'profile', component: Profile }];

export default createRouter({
  history: createWebHistory(),
  routes,
});
