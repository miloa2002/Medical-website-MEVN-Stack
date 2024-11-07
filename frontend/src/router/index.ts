import AdminLayout from '@/layouts/AdminLayout.vue'
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
    },
    {
      path: '/login-admin',
      name: 'login-admin',
      component: () => import("../views/admin/LoginAdminView.vue")
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'add-doctor',
          component: () => import("../views/admin/AddDoctorView.vue")
        }
      ]
    }
  ]
})

export default router
