<template>
  <div class="container-tasklist">
    <div v-if="tasks.length > 0">
      <div class="container-task" v-for="task in tasks" :key="task.id">
        <h5>{{task.descricao}} <br>
          <small>{{task.data_conclusao}}</small>
        </h5>
      </div>
    </div>
    <div v-else class="container-task">
      <h5 class="text-center">Não foram cadastradas tarefas.</h5>
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
