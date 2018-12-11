<template>
  <div class="container-login">
    <h3>Seja Bem vindo ao To do'it</h3>
    <form>
      <div class="input-default">
        <input type="text" v-model="user.email" placeholder="Email">
      </div>
      <div class="input-default">
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
        this.$router.push({ name: 'user.create' });
      }, (fail) => {
        console.log(fail);
        swal('Opss', 'Houve uma falha ao realizar o login. Verifique seu nome de usuário e senha e tente novamente', 'error');
      });
    },
  },
};
</script>

<style scoped="sass">

</style>
