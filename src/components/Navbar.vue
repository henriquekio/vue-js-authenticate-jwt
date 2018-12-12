<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <div class="nav-logo">
        <router-link :to="{name: 'tarefa.index'}">To do'it</router-link>
      </div>
      <ul>
        <li>
          <router-link :to="{name: 'tarefa.index'}">Home</router-link>
        </li>
        <li>
          <a href="#">Nova Tarefa</a>
        </li>
        <li>
          <a href="#">Tarefa Realizada</a>
        </li>
        <li>
          <a @click="logout($event)">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import store from '../store';

export default {
  name: 'Navbar',
  methods: {
    logout(event) {
      event.preventDefault();
      store.dispatch('logout');
      // this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>

</style>
