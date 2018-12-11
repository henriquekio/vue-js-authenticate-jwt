import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Create from './views/usuario/Create.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { auth: false },
    }, {
      path: '/cadastro-usuario',
      name: 'user.create',
      component: Create,
      meta: { auth: false },
    },
  ],
});
