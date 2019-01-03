<template>
  <div class="row valign-wrapper" style="height: 100%">
    <div class="container">
      <div class="row">
        <div class="col m6 offset-m3">
          <div class="card-panel">
            <h4 class="text-center">Cadastre-se =)</h4>
            <form class="row">
              <div class="input-field col m12">
                <input type="text" v-model="user.name" placeholder="Digite seu nome">
              </div>
              <div class="input-field col m12">
                <input placeholder="Digite seu email" type="email" v-model="user.email">
              </div>
              <div class="input-field col m12">
                <input type="password" v-model="user.password" placeholder="Digite sua senha">
              </div>
              <div class="input-field col m12">
                <input placeholder="Confirme sua senha" type="password"
                       v-model="user.password_confirmation">
              </div>
              <div class="row">
                <div class="col m4">
                  <router-link class="btn-default" :to="{name: 'home'}">Voltar</router-link>
                </div>
                <div class="col m4 right">
                  <button @click="createUser" class="btn-success pull-right"
                          type="button">Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import store from '../../store';

export default {
  name: 'Create',
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    createUser() {
      const self = this;

      store.dispatch('createUser', this.user).then(() => {
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
