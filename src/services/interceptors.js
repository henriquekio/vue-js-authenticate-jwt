import Vue from 'vue';
import JwtService from './JwtService';

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', JwtService.getAuthorizationHeader());
  next();
});
