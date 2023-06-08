import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('@/components/games.vue'),
    },
    {
      path: '/roster',
      name: 'roster',
      component: () => import('@/components/roster.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/components/events.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/contact.vue'),
    },
  ]
})

export default router