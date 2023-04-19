// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { Home, Dashboard, Account, Admin } from '@/views'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard
    ,
  },
  { 
    path: '/account',
    component: Account
    ,
  },
  {
    path: '/admin',
    component: Admin
    ,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
