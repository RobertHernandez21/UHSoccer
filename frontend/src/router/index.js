import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/store/auth";

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
    {
      path: '/eventdetails/:id',
      name: 'eventdetails',
      props: true,
      component: () => import('@/components/eventdetails.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isAuth) {
          // User is authenticated, allow access
          next();
        }
        else{alert('Unauthorized User.')
        next({ name: "home" });}
    }
    },
    {
      path: '/eventform',
      name: 'eventform',
      component: () => import('@/components/eventform.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isAuth) {
          // User is authenticated, allow access
          next();
        }
        else{alert('Unauthorized User.')
        next({ name: "home" });}
    }
    },
    {
      path: '/createroster',
      name: 'createroster',
      component: () => import('@/components/createroster.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isAuth) {
          // User is authenticated, allow access
          next();
        }
        else{alert('Unauthorized User.')
        next({ name: "home" });}
    }
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('@/components/donate.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login.vue'),
    },
  ]
})

export default router