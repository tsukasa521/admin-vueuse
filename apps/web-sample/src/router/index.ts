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
    component: () => import('@/views/vue/table/Table.vue'),
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
    path: '/tdesign/modal',
    meta: { title: 'useModal示例', module: "tdesign" },
    component: () => import('@/views/tdesign/modal/Modal.vue'),
  },
  {
    path: '/tdesign/message',
    meta: { title: 'useMessage示例', module: "tdesign" },
    component: () => import('@/views/tdesign/Message.vue'),
  },
  {
    path: '/element-plus/table',
    meta: { title: 'useTable示例', module: "element-plus" },
    component: () => import('@/views/element-plus/table'),
  },
  {
    path: '/element-plus/modal',
    meta: { title: 'useModal示例', module: "element-plus" },
    component: () => import('@/views/element-plus/modal'),
  },
  {
    path: '/element-plus/message',
    meta: { title: 'useMessage示例', module: "element-plus" },
    component: () => import('@/views/element-plus/Message.vue'),
  },
  {
    path: '/echarts',
    meta: { title: 'useChart示例', module: "echarts" },
    component: () => import('@/views/echarts'),
  },
]

const baseUrl = import.meta.env.BASE_URL
export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})

