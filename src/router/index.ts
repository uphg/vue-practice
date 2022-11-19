import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/tabs',
      name: 'TabsDemo',
      component: () => import('../views/Tabs.vue')
    },
    {
      path: '/pagination',
      name: 'PaginationDemo',
      component: () => import('../views/Pagination.vue')
    }
  ]
})

export default router
