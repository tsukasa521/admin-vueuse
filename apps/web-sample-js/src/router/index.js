import { createRouter, createWebHistory } from 'vue-router'

/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
export const routes = [
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
    path: '/form',
    meta: { title: 'useForm示例', module: "基础" },
    component: () => import('@/views/vue/form/Form.vue'),
  }
]

const baseUrl = import.meta.env.BASE_URL
export const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
})

