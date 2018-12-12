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

  accessToken(email, password) {
    return APIResourcesService.getTokenFromApi(email, password).then((response) => {
      this.token = response.data.token;
    });
  },
  revokeToken() {
    return APIResourcesService.revokeTokenFromApi().then((response) => {
      sessionStorage.removeItem('token');
      return response;
    });
  },
  getAuthorizationHeader() {
    return `Bearer ${this.token}`;
  },
};
