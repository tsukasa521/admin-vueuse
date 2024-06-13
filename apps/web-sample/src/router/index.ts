import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/table', meta: { hidden: true } },
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
    path: '/message',
    meta: { title: 'useMessage示例' },
    component: () => import('../views/Message.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
