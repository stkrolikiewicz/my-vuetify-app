// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import About from '@/views/About/About.vue'
import AboutItem from '@/views/About/Item/component.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: ':id',
        name: 'AboutItem',
        component: AboutItem,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
