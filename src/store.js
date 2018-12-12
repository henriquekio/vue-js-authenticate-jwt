import Vue from 'vue';
import Vuex from 'vuex';
import JwtService from './services/JwtService';
import { Tarefa } from './services/Resource';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    auth: {
      check: JwtService.token !== null,
    },
  },
  mutations: {
    setTaskState(state, tasks) {
      // eslint-disable-next-line
      state.tasks = tasks;
    },
    authenticated(state) {
      // eslint-disable-next-line
      state.auth.check = true;
    },
    unauthenticated(state) {
      // eslint-disable-next-line
      state.auth.check = false;
    },
  },
  actions: {
    login(context, { email, password }) {
      // eslint-disable-next-line
      return JwtService.accessToken(email, password).then(response => {
        context.commit('authenticated');
        return response;
      });
    },
    logout(context) {
      return JwtService.revokeToken().then(() => {
        context.commit('unauthenticated');
      });
    },
    getTasks(context) {
      Tarefa.query().then((success) => {
        context.commit('setTaskState', success.data);
      });
    },
  },
});
