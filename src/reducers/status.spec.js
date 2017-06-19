import reducer from './status';
import { GetCurrentUserAction, GetCurrentUserActionFail, GetCurrentUserActionSuccess } from '../actions/user';
import { GetMessagesAction, GetMessagesActionFail, GetMessagesActionSuccess } from '../actions/message';

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

  describe('GET_MESSAGES', () => {

    test('It should set isMessagesLoading to true', () => {
      const state = { isUserLoading: true, isMessagesLoading: false };
      const nextState = reducer(state, new GetMessagesAction());
      expect(nextState).toEqual(expect.objectContaining({ isMessagesLoading: true }));
    });

  });

  describe('GET_MESSAGES_FAIL', () => {

    test('It should set isMessagesLoading to false', () => {
      const state = { isUserLoading: true, isMessagesLoading: true };
      const nextState = reducer(state, new GetMessagesActionFail());
      expect(nextState).toEqual(expect.objectContaining({ isMessagesLoading: false }));
    });

  });

  describe('GET_MESSAGES_SUCCESS', () => {

    test('It should set isMessagesLoading to false', () => {
      const state = { isUserLoading: true, isMessagesLoading: true };
      const nextState = reducer(state, new GetMessagesActionSuccess());
      expect(nextState).toEqual(expect.objectContaining({ isMessagesLoading: false }));
    });

  });

});