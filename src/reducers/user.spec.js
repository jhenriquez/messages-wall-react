import reducer from './user';

import { GetCurrentUserActionSuccess, GetCurrentUserActionFail } from '../actions/user';
import { mockUser } from '../models/user.spec';

describe('Reducer: user', () => {

  describe('GET_CURRENT_USER_SUCESSS', () => {

    test('It resolves to the value provided for payload', () => {
      const nextState = reducer(null, new GetCurrentUserActionSuccess(mockUser));
      expect(nextState).toEqual(mockUser);
    });

  });

  describe('GET_CURRENT_USER_FAIL', () => {

    test('It resolves to null when retrieving the current user fails', () => {
      const nextState = reducer(mockUser, new GetCurrentUserActionFail());
      expect(nextState).toEqual(null);
    });

  });

});