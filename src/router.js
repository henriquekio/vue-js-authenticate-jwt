import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Create from './views/usuario/Create.vue';
import IndexUsuario from './views/tarefa/Index.vue';
import CreateTarefa from './views/tarefa/Create.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/home',
      name: 'tarefa.index',
      component: IndexUsuario,
      meta: { auth: true },
    },
    {
      path: '/nova-tarefa',
      name: 'tarefa.create',
      component: CreateTarefa,
      meta: { auth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!store.state.auth.check && to.meta.auth) {
    return router.push({ name: 'home' });
  }

  return next();
});

export default router;
