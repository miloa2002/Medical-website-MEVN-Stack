import adminArea from '@/api/adminArea'
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
      meta: { requiresAuth: true },
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

router.beforeEach(async (to,from,next) => {
  const rutaIsProtected = to.matched.some(record => record.meta.requiresAuth);
  if(rutaIsProtected) {
    try {
      await adminArea.authAdmin();
      next();
    } catch (error) {
      next({name: 'login'});
    }
  }else {
    next();
  }
})

export default router
