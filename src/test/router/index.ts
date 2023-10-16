import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/table' },
  {
    path: '/table',
    meta: { title: 'Table' },
    component: () => import('../views/Table.vue'),
  },
  {
    path: '/dialog',
    meta: { title: 'Dialog' },
    component: () => import('../views/Dialog.vue'),
  },
  {
    path: '/notification',
    meta: { title: 'Notification' },
    component: () => import('../views/Notification.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
