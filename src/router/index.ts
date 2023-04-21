// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { getUserState } from '@/firebase'

const routes = [
  {
    path: '/',
    meta: { requiresUnauth: true },
    component: () => import('@/views/Home'),
  },
  {
    path: '/',
    meta: { requiresUnauth: true },
    component: () => import('@/views/Auth'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/Auth/Login'),
      },
      {
        path: 'signup',
        component: () => import('@/views/Auth/Signup'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/views/App'),
    meta: { requiresAuth: true },
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/account')
  else next()
})

export default router
