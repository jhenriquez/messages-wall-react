import HttpService from './httpService';

export default class UserService extends HttpService {

  getCurrentUser() {
    return this.get('/api/v1/user');
  }

}