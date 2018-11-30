<template>
    <div class="container-login">
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
                    <router-link  class="btn-default" to="/">Voltar</router-link>
                </div>
                <div class="item">
                    <button type="button" class="btn-success pull-right">Cadastrar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
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
};
</script>

<style scoped>

</style>
