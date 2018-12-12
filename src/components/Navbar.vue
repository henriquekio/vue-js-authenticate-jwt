<template>
  <nav class="navbar">
    <div class="nav-wrapper">
      <div class="nav-logo">
        <router-link :to="{name: 'home'}">To do'it</router-link>
      </div>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <a href="#">Nova Tarefa</a>
        </li>
        <li>
          <a href="#">Tarefa Realizada</a>
        </li>
        <li>
          <a href="#">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>
