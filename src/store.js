import Vue from 'vue';
import Vuex from 'vuex';
import JwtService from './services/JwtService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    login(context, { email, password }) {
      return JwtService.accessToken(email, password);
    },
  },
  getters: {

  },
});
