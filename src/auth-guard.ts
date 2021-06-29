import router from './router/index';
import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import storeService from './store/index';

const authList: string[] = ['demo', 'demo/demo-a', 'demo/demo-b', 'demo/demo-c'];
const whiteList: string[] = ['/login'];

let refreshed = false;

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  if (whiteList.indexOf(to.path) > -1) {
    return next();
  }
  const hasToken = storeService.state.user.token;
  if (hasToken) {
    if (!refreshed) {
      refreshed = true;
      try {
        storeService.dispatch('auth/GenerateRoutes', authList);
        const accessRoutes: RouteRecordRaw[] = storeService.state.auth.routes;
        accessRoutes.forEach(r => router.addRoute(r));
        next({ ...to, replace: true });
      } catch (e) {
        next('/login');
      }
    } else {
      next();
    }
  } else {
    next('/login');
  }
});

export default router;
