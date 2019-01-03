<template>
  <div class="container-login">
    <h4>Seja Bem vindo ao To do'it</h4>
    <form>
      <div class="input-field">
        <input type="text" v-model="user.email" placeholder="Email">
      </div>
      <div class="input-field">
        <input type="password" v-model="user.password" placeholder="Senha">
      </div>
      <button type="button" @click="login()" class="btn-default btn-wrap">Entrar</button>
      <p>
        <router-link to="/cadastro-usuario">Cadastre-se</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert';
import store from '../store';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      store.dispatch('login', this.user).then(() => {
        this.$router.push({ name: 'tarefa.index' });
      }, () => {
        swal('Opss', 'Houve uma falha ao realizar o login. Verifique seu nome de usuário e senha e tente novamente', 'error');
      });
    },
  },
};
</script>

<style scoped="sass">

</style>
