import Vue from 'vue';
import JwtService from './JwtService';
import store from '../store';
import router from '../router';

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', JwtService.getAuthorizationHeader());
  next();
});


Vue.http.interceptors.push((request, next) => {
  // eslint-disable-next-line
  next((response) => {
    if (response.status === 401) {
      return JwtService.refreshToken()
        .then(() => Vue.http(request))
        .catch(() => {
          store.commit('unauthenticated');
          router.push({ name: 'home' });
        });
    }
  });
});
