import Vue from 'vue'
import Vuex from 'vuex'
import {authService} from "../services/AuthService";
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchParams: null,
    token: localStorage.getItem('token') || null,
  },
  getters: {
    searchParams: state => state.searchParams,
    loggedIn: state => state.token !== null,
  },
  mutations: {
    changeSearchParams(state, newParams) {
      state.searchParams = newParams
    },
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    async changeSearchParams({commit}, newParams) {
      commit('changeSearchParams', newParams);
    },
    async login({commit}, credentials) {
      try {
        const response = await authService.login(credentials);
        if (response.acces_token) {
          commit('retrieveToken', response.acces_token);
        }
        if (response.error) {
          return response.error;
        }
      } catch (e) {
        return e;
      }
    },
    async logout(context) {
      await authService.logout(context.state.token);
      context.commit('destroyToken');
    }
  }
});