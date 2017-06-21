import HttpService from './httpService';
import type { IUser } from '../models/user';

export default class UserService extends HttpService {

  getCurrentUser() : Promise<IUser> {
    return this.get('/api/v1/user');
  }

}