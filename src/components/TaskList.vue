<template>
  <div class="container content">
    <div v-if="tasks.length > 0">
      <ul class="collection">
        <li class="collection-item avatar" v-for="task in tasks" :key="task.id">
          <span class="title">{{task.descricao}}</span>
          <p>{{task.data_conclusao}}</p>
          <a href="#" v-on:click.prevent class="secondary-content">
            <i class="material-icons">check_box_outline_blank</i>
          </a>
        </li>
      </ul>
    </div>
    <div v-else class="container-task">
      <h6 class="text-center">Não foram cadastradas tarefas.</h6>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'TaskList',
  computed: {
    tasks() {
      return store.state.tasks;
    },
  },
};
</script>

<style scoped>

</style>
