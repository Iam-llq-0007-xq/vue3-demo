import { createStore } from 'vuex';
import authModule from './modules/auth';
import settingModule from './modules/setting';
import userModule from './modules/user';

export default createStore({
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authModule,
    setting: settingModule,
    user: userModule,
  },
});
