import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/test' },
  {
    path: '/test',
    meta: { title: 'Test' },
    component: () => import('../views/test.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
