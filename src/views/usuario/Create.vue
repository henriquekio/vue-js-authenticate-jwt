<template>
  <div class="row valign-wrapper" style="height: 100%">
    <div class="container">
      <div class="row">
        <div class="col m6 offset-m3">
          <div class="card-panel">
            <h4 class="text-center">Cadastre-se =)</h4>
            <form class="row">
              <div class="input-field col m12">
                <input type="text" v-model="name" placeholder="Digite seu nome">
              </div>
              <div class="input-field col m12">
                <input type="email" name="email" v-model="email" placeholder="Digite seu email">
              </div>
              <div class="input-field col m12">
                <input type="password" v-model="password" placeholder="Digite sua senha">
              </div>
              <div class="input-field col m12">
                <input placeholder="Confirme sua senha" type="password"
                       v-model="password_confirmation">
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
      })
        .then(() => {
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
