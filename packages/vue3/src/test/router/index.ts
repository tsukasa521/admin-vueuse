import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/table' },
  {
    path: '/table',
    meta: { title: 'useTable示例' },
    component: () => import('../views/Table.vue'),
  },
  {
    path: '/dialog',
    meta: { title: 'useDialog示例' },
    component: () => import('../views/Dialog.vue'),
  },
  {
    path: '/notification',
    meta: { title: 'useNotification示例' },
    component: () => import('../views/Notification.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
