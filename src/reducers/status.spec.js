import reducer from './status';
import { GetCurrentUserAction, GetCurrentUserActionFail, GetCurrentUserActionSuccess } from '../actions/user';

import { mockUser } from '../models/user.spec';

describe ('Reducer: status', () => {

  describe('GET_CURRENT_USER', () => {

    test('It should set isUserLoading attribute to true', () => {
      const state = { isUserLoading: false, isMessagesLoading: false };
      const nextState = reducer(state, new GetCurrentUserAction());
      expect(nextState).toEqual(expect.objectContaining({ isUserLoading: true }));
    });

  });

  describe('GET_CURRENT_USER_FAIL', () => {

    test('It should set isUserLoading attribute to false', () => {
      const state = { isUserLoading: true, isMessagesLoading: false };
      const nextState = reducer(state, new GetCurrentUserActionFail());
      expect(nextState).toEqual(expect.objectContaining({ isUserLoading: false }));
    });

  });

  describe('GET_CURRENT_USER_SUCCESS', () => {
    test('It should set isUserLoading attribute to false', () => {
      const state = { isUserLoading: true, isMessagesLoading: false };
      const nextState = reducer(state, new GetCurrentUserActionSuccess(mockUser));
      expect(nextState).toEqual(expect.objectContaining({ isUserLoading: false }));
    });
  });

});