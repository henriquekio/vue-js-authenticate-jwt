<template>
    <div class="container-login">
        <h3>Seja Bem vindo ao To do'it</h3>
        <form>
            <div class="input-default">
              <input type="text" placeholder="Email">
            </div>
            <div class="input-default">
                <input type="password" placeholder="Senha">
            </div>
            <button type="button" class="btn-default btn-wrap">Entrar</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: null,
      senha: null,
    };
  },
};
</script>

<style scoped="sass">

</style>
