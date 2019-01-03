<template>
  <div class="row">
    <navbar></navbar>
    <div class="container content">
      <div class="card">
        <div class="row">
          <h4>Adicione a tarefa</h4>
          <div class="">
            <form>
              <label for="descricao">Descricao</label>
              <input id="descricao" type="text">
              <label for="categoria">Categoria</label>
              <select name="categoria" id="categoria">
                <option disabled selected>Selecione uma opção</option>
              </select>
              <input type="date" id="">
            </form>
          </div>
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
