<template>
  <div class="row">
    <navbar></navbar>
    <div class="container content">
      <div class="col m8 offset-m2">
        <div class="card-panel">
          <h5 class="text-center">Adicione a tarefa</h5>
          <form class="row" v-on:submit.prevent >
            <div class="input-field">
              <label for="descricao">Descricao</label>
              <input id="descricao" type="text" v-model="tarefa.descricao">
            </div>
            <div class="wrapper-select-default">
              <label for="categoria">Categoria</label>
              <select class="browser-default" id="categoria" v-model="tarefa.categoria_id">
                <option disabled selected>Selecione uma opção</option>
                <option v-for="categoria in categorias" :key="categoria.id"
                        :value="categoria.id">{{ categoria.descricao }}</option>
              </select>
            </div>
            <div class="input-field">
              <div class="col m4">
                <router-link class="btn-default" :to="{name: 'tarefa.index'}">Voltar</router-link>
              </div>
              <div class="col m4 right">
                <button @click="addTask" class="btn-success pull-right"
                        type="button">Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="margin-top-20">
          <TaskList></TaskList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import store from '../../store';
import swal from 'sweetalert';
import TaskList from '../../components/TaskList.vue';

export default {
  name: 'Create',
  components: { TaskList, Navbar },
  data() {
    return {
      tarefa: {
        descricao: null,
        categoria_id: null,
      },
    };
  },
  computed: {
    categorias() {
      return store.state.categorias;
    },
  },
  mounted() {
    store.dispatch('getCategorias');
  },
  methods: {
    addTask() {
      store.dispatch('createTask', this.tarefa)
        .then(() => { swal('Tarefa cadastrada com sucesso!', '', 'success'); })
        .catch(() => { swal('Houve umerro ao cadastrar a tarefa!', 'Por favor, tente novamente mais tarde ou entre em contato com o suporte', 'error'); });
    },
  },
};
</script>

<style scoped>

</style>
