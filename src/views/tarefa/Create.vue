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
              <input id="descricao" type="text">
            </div>
            <div class="wrapper-select-default">
              <label for="categoria">Categoria</label>
              <select name="categoria" id="categoria" class="browser-default">
                <option disabled selected>Selecione uma opção</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Create',
  components: { Navbar },
};
</script>

<style scoped>

</style>
