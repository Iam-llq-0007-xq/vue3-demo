import { Module } from 'vuex';

const state = {
  token: false,
};

const mutations = {
  SET_TOKEN(state: any, token: boolean) {
    state.token = token;
  },
};

const actions = {
  setToken({ commit, state }: any) {
    commit('SET_TOKEN', !state.token);
  },
};

const settingModule: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default settingModule;

