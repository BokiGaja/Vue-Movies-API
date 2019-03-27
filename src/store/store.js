import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchParams: null
  },
  getters: {
    searchParams: state => state.searchParams
  },
  mutations: {
    changeSearchParams(state, newParams) {
      state.searchParams = newParams
    }
  },
  actions: {
    async changeSearchParams({commit}, newParams) {
      commit('changeSearchParams', newParams);
    }
  }
});