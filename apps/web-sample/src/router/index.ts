import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/table', meta: { hidden: true } },
  {
    path: '/table',
    meta: { title: 'useTable示例' },
    component: () => import('@/views/Table.vue'),
  },
  {
    path: '/modal',
    meta: { title: 'useModal示例' },
    component: () => import('@/views/Dialog.vue'),
  },
  {
    path: '/message',
    meta: { title: 'useMessage示例' },
    component: () => import('@/views/Message.vue'),
  },
  {
    path: '/tdesign/message',
    meta: { title: 'useMessage示例' },
    component: () => import('@/views/tdesign/Message.vue'),
  },
]

const baseUrl = import.meta.env.BASE_URL
export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})
