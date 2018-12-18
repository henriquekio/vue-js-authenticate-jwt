<template>
  <div class="container-fluid">
    <navbar></navbar>
      <div class="container content">
        <div class="row">
          <h4 v-if="userData != null">Seja bem vindo {{ userData.name }}</h4>
        </div>
        <task-list></task-list>
      </div>
  </div>
</template>

<script>
import TaskList from '../../components/TaskList.vue';
import store from '../../store';
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'Index',
  components: {
    Navbar,
    TaskList,
  },
  computed: {
    userData() {
      return store.state.auth.user;
    },
  },
  created() {
    store.dispatch('getTasks');
  },
};
</script>

<style scoped>

</style>
