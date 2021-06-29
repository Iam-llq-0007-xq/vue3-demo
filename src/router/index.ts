import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
];

export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/demo',
    name: 'demo',
    component: Layout,
    redirect: '/demo/demo-a',
    meta: {
      title: 'demo',
      hidden: false, // 是否隐藏(思路：可以参考下panjiachen)
      iconName: 'demo', // svgIcon里的组件，通过引入SvgIcon/index.vue来使用
    },
    children: [
      {
        path: 'demo-a',
        name: 'demo/demo-a',
        component: () => import('@/pages/demo-a/index.vue'),
        meta: {
          title: 'demo.demo-a',
          hidden: false,
          iconName: 'demo-a',
        },
      },
      {
        path: 'demo-b',
        name: 'demo/demo-b',
        component: () => import('@/pages/demo-b/index.vue'),
        meta: {
          title: 'demo.demo-b',
          hidden: false,
          iconName: 'demo-b',
        },
      },
      {
        path: 'demo-c',
        name: 'demo/demo-c',
        component: () => import('@/pages/demo-c/index.vue'),
        meta: {
          title: 'demo.demo-c',
          hidden: false,
          iconName: 'demo-c',
        },
      },
    ],
  },
  {
    path: '/.*',
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
