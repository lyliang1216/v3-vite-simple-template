import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/generateImg',
      children: [
        {
          path: 'generateImg',
          name: 'generateImg',
          component: () => import('@/views/generateImg.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/about/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'aboutIndex',
          component: () => import('@/views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
