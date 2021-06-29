import { Module } from 'vuex';

const state = {
  onoff: false,
};

const mutations = {
  SET_ONOFF(state: any, onoff: boolean) {
    state.onoff = onoff;
  },
};

const actions = {
  toggleOnoff({ commit, state }: any) {
    commit('SET_ONOFF', !state.onoff);
  },
};

const settingModule: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default settingModule;

