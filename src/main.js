import Vue from 'vue';
import resource from 'vue-resource';
import App from './App.vue';
import '@/assets/sass/main.sass';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(resource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
