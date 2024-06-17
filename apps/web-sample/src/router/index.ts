import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/getting-started', meta: { hidden: true } },
  {
    path: '/getting-started',
    meta: { title: '快速开始', module: "开始" },
    component: () => import('@/views/GettingStarted.vue'),
  },
  {
    path: '/table',
    meta: { title: 'useTable示例', module: "基础" },
    component: () => import('@/views/Table.vue'),
  },
  {
    path: '/modal',
    meta: { title: 'useModal示例', module: "基础" },
    component: () => import('@/views/Dialog.vue'),
  },
  {
    path: '/message',
    meta: { title: 'useMessage示例', module: "基础" },
    component: () => import('@/views/Message.vue'),
  },
  {
    path: '/tdesign/table',
    meta: { title: 'useTable示例', module: "tdesign" },
    component: () => import('@/views/tdesign/table/Table.vue'),
  },
  {
    path: '/tdesign/message',
    meta: { title: 'useMessage示例', module: "tdesign" },
    component: () => import('@/views/tdesign/Message.vue'),
  },
]

const baseUrl = import.meta.env.BASE_URL
export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})

