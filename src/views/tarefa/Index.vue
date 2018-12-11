<template>
  <div class="container-fluid">
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from '../../components/TaskList.vue';
import store from '../../store';

export default {
  name: 'Index',
  components: { TaskList },
  mounted() {
    store.dispatch('getTasks');
  },
};
</script>

<style scoped>

</style>
