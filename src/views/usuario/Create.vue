<template>
  <div class="container-flex" style="height: 100%">
    <div class="container-form">
      <h3>Cadastre-se =)</h3>
      <form>
        <div class="input-default">
          <input type="text" v-model="name" placeholder="Digite seu nome">
        </div>
        <div class="input-default">
          <input type="email" name="email" v-model="email" placeholder="Digite seu email">
        </div>
        <div class="input-default">
          <input type="password" v-model="password" placeholder="Digite sua senha">
        </div>
        <div class="input-default">
          <input placeholder="Confirme sua senha" type="password"
                 v-model="password_confirmation">
        </div>
        <div class="container-btn-form">
          <div class="item">
            <router-link class="btn-default" :to="{name: 'home'}">Voltar</router-link>
          </div>
          <div class="item">
            <button @click="createUser" class="btn-success pull-right"
                    type="button">Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name: 'Create',
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
    };
  },
  methods: {
    createUser() {
      const self = this;
      this.$http.post('http://api.localhost/api/cadastrar-usuario', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }).then(() => {
        swal('Cadastrado com sucesso', '', 'success')
          .then(() => {
            self.$router.push({ name: 'home' });
          });
      }, () => {
        swal('Houve um erro ao cadastrar o usuário.', 'Por favor, tente novamente mais tarde.', 'error');
      });
    },
  },
};
</script>

<style scoped>

</style>
