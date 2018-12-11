import Vue from 'vue';
import resource from 'vue-resource';

Vue.use(resource);

const { Categoria } = Vue.resource(`${process.env.VUE_APP_URL}/categorias`);
const { Tarefa } = Vue.resource(`${process.env.VUE_APP_URL}/tarefas`);

export { Categoria, Tarefa };
