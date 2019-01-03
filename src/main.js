import Vue from 'vue';
import resource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import '@/assets/sass/main.sass';

Vue.config.productionTip = false;
Vue.use(resource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
