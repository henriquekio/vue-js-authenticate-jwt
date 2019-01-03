import Vue from 'vue';
import Vuex from 'vuex';
import JwtService from './services/JwtService';
import { Tarefa, Categoria } from './services/Resource';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    categorias: [],
    auth: {
      check: JwtService.token !== null,
      user: JwtService.user,
    },
  },
  mutations: {
    setTaskState(state, tasks) {
      // eslint-disable-next-line
      state.tasks = tasks;
    },
    setCategoriaState(state, categorias) {
      // eslint-disable-next-line
      state.categorias = categorias;
    },
    setUserData(state, user) {
      // eslint-disable-next-line
      state.auth.user = user;
    },
    authenticated(state) {
      // eslint-disable-next-line
      state.auth.check = true;
    },
    unauthenticated(state) {
      // eslint-disable-next-line
      state.auth.check = false;
      // eslint-disable-next-line
      state.auth.user = null;
    },
  },
  actions: {
    login(context, { email, password }) {
      // eslint-disable-next-line
      return JwtService.accessToken(email, password).then(response => {
        context.commit('authenticated');
        JwtService.getUserData().then(responseUser => context.commit('setUserData', responseUser.data.user));
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
    getCategorias(context) {
      Categoria.query().then((success) => {
        context.commit('setCategoriaState', success.data);
      });
    },
  },
});
