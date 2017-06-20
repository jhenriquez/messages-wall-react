import { reducer } from './session';

import { GetCurrentUserActionSuccess, GetCurrentUserActionFail  } from '../actions/user';
import { mockUser } from '../models/user.spec';


describe('Reducer: session', () => {
  test('It resolves to an initial state when passed undefined', () => {
    const nextState = reducer(undefined, 'Some weird action');
    expect(nextState).toEqual({ isAnonymous: true, user: null });
  });

  describe('GET_CURRENT_USER_SUCCESS', () => {

    test('It sets the session to non anonymous', () => {
      const nextState = reducer(undefined, new GetCurrentUserActionSuccess(mockUser));
      expect(nextState).toEqual(expect.objectContaining({ isAnonymous: false }));
    });

    test('It sets the session user to the payload value', () => {
      const nextState = reducer(undefined, new GetCurrentUserActionSuccess(mockUser));
      expect(nextState).toEqual(expect.objectContaining({ user: mockUser }));
    });

  });

  describe('GET_CURRENT_USER_FAIL', () => {

    test('It sets the session to anonymous', () => {
      const nextState = reducer({ isAnonymous: false, user: mockUser }, new GetCurrentUserActionFail(mockUser));
      expect(nextState).toEqual(expect.objectContaining({ isAnonymous: true }));
    });

    test('It sets the session user to null', () => {
      const nextState = reducer({ isAnonymous: false, user: mockUser }, new GetCurrentUserActionFail(mockUser));
      expect(nextState).toEqual(expect.objectContaining({ user: null }));
    });

  });

});