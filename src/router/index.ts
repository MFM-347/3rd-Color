import { createRouter, createWebHistory } from 'vue-router'
import vHome from '@/views/vHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: vHome,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About | 3rd Color' },
      component: () => import('@/views/vAbout.vue'),
    },
  ],
})

export default router
