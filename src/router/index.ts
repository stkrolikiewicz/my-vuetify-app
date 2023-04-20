// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/',
    component: () => import('@/views/Auth'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/Auth/Login'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/views/App'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/App/Dashboard'),
      },
      { 
        path: 'account',
        component: () => import('@/views/App/Account'),
      },
      {
        path: 'admin',
        component: () => import('@/views/App/Admin'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
