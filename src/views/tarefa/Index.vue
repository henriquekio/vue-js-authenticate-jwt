<template>
  <div class="container-fluid">
    <navbar></navbar>
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from '../../components/TaskList.vue';
import store from '../../store';
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'Index',
  components: { Navbar, TaskList },
  created() {
    store.dispatch('getTasks');
  },
};
</script>

<style scoped>

</style>
