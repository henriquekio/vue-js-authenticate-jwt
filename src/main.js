import Vue from 'vue';
import App from './App.vue';
import '@/assets/sass/main.sass';
import router from './router';
import store from './store';
import resource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(resource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
