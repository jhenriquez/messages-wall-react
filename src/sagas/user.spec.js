import { apply, put } from 'redux-saga/effects';

import UserService from '../services/userService';
import { getCurrentUserSaga } from './user';
import * as UserActions from '../actions/user';

describe('Saga: User', () => {

  const userService = new UserService();

  describe('GET_CURRENT_USER', () => {

    test('It calls getCurrentUser on UserService', () => {
      const gen = getCurrentUserSaga();
      expect(gen.next().value).toEqual(apply(userService, userService.getCurrentUser));
    });

    test('If successful, dispatches a GET_CURRENT_USER_SUCCESS action', () => {
      const gen = getCurrentUserSaga();
      expect(gen.next().value).toEqual(apply(userService, userService.getCurrentUser));
      const user = { email: 'some@email.com' };
      expect(gen.next(user).value).toEqual(put(new UserActions.GetCurrentUserActionSuccess(user)));
    });

    test('On Error, dispatches a GET_CURRENT_USER_FAIL action', () => {
      const gen = getCurrentUserSaga();
      expect(gen.next().value).toEqual(apply(userService, userService.getCurrentUser));

      const error = { message: 'some dummy error object' };
      expect(gen.throw(error).value).toEqual(put(new UserActions.GetCurrentUserActionFail(error)));
    });

  });

});