import Vue from 'vue';
import resource from 'vue-resource';

Vue.use(resource);
require('./interceptors');

// eslint-disable-next-line
export class APIResourcesService {
  static getTokenFromApi(email, password) {
    return Vue.http.post(`${process.env.VUE_APP_URL}/login`, {
      email,
      password,
    });
  }

  static revokeTokenFromApi() {
    return Vue.http.post(`${process.env.VUE_APP_URL}/logout`);
  }

  static refreshTokenFromApi() {
    return Vue.http.post(`${process.env.VUE_APP_URL}/refresh`);
  }

  static getUserDataFromAPi() {
    return Vue.http.get(`${process.env.VUE_APP_URL}/user-data`);
  }

  static createNewUser(user) {
    return Vue.http.post(`${process.env.VUE_APP_URL}/cadastrar-usuario`, user);
  }
}
