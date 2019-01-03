import { APIResourcesService } from './APIResourcesService';

export default {
  // eslint-disable-next-line
  get token() {
    return sessionStorage.getItem('token');
  },
  // eslint-disable-next-line
  set token(token) {
    sessionStorage.setItem('token', token);
  },
  // eslint-disable-next-line
  get user() {
    const user = sessionStorage.getItem('user');
    return JSON.parse(user);
  },
  // eslint-disable-next-line
  set user(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
  },
  accessToken(email, password) {
    return APIResourcesService.getTokenFromApi(email, password).then((response) => {
      this.token = response.data.token;
    });
  },
  refreshToken() {
    return APIResourcesService.refreshTokenFromApi().then((response) => {
      this.token = response.data.token;
    });
  },
  revokeToken() {
    return APIResourcesService.revokeTokenFromApi().then((response) => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      return response;
    });
  },
  getUserData() {
    return APIResourcesService.getUserDataFromAPi().then((response) => {
      this.user = response.data.user;
      return response;
    });
  },
  getAuthorizationHeader() {
    return `Bearer ${this.token}`;
  },
};
