import { createRouter, createWebHistory } from 'vue-router'
import app from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../App.vue'),
    },
  ],

  // Add this to scroll to top on every route change
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behaviour: 'smooth' }
  },
})

export default router
