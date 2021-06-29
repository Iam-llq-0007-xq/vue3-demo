import { RouteRecordRaw } from 'vue-router';
import { Module } from 'vuex';
import { constantRoutes, asyncRoutes } from '@/router/index';

function hasPermission(routesNames: string[], route: any): boolean {
  return route.name ? routesNames.includes(route.name) : true;
}

function filterAsyncRoutes(routes: RouteRecordRaw[], routesNames: string[]): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = [];

  routes.forEach((route: RouteRecordRaw) => {
    const tmp: any = { ...route };
    if (hasPermission(routesNames, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, routesNames);
      }

      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [],
  dynamicRoutes: [],
};

const mutations = {
  SET_ROUTES(state: any, routes: RouteRecordRaw[]) {
    state.routes = constantRoutes.concat(routes);
    state.dynamicRoutes = routes;
  },
};

const actions = {
  GenerateRoutes({ commit, state }: any, accessedRoutesNames: string[]) {
    let accessedRoutes: RouteRecordRaw[] = filterAsyncRoutes(asyncRoutes, accessedRoutesNames);
    if (accessedRoutes.length > 0) {
      accessedRoutes = [
        {
          path: '/',
          redirect: accessedRoutes[0].path,
        },
        ...accessedRoutes,
      ];
    }
    commit('SET_ROUTES', accessedRoutes);
  },
};

const authModule: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default authModule;
