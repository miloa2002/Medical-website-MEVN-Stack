import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/public/LoginView.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("../views/public/RegisterView.vue")
    }
  ]
})

export default router
