import Vue from 'vue';
import Vuex from 'vuex';
import JwtService from './services/JwtService';
import { Tarefa } from './services/Resource';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTaskState(state, tasks) {
      // eslint-disable-next-line
      state.tasks = tasks;
    },
  },
  actions: {
    login(context, { email, password }) {
      return JwtService.accessToken(email, password);
    },
    getTasks(context) {
      Tarefa.query().then((success) => {
        context.commit('setTaskState', success.data);
      });
    },
  },
});
