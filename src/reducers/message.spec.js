import { reducer } from './message';
import mockMessage from '../models/message.spec';

import { GetMessagesActionSuccess, GetMessagesActionFail } from '../actions/message';

describe('Reducer: messages', () => {


  describe('GET_MESSAGES_SUCCESS', () => {

    test('It resolves to the action\'s payload', () => {
      const messages = [mockMessage];
      const nextState = reducer(null, new GetMessagesActionSuccess(messages));
      expect(nextState).toEqual(messages);
    });

  });

  describe('GET_MESSAGES_FAIL', () => {

    test('It resolves to an empty array when the retrieval fails.', () => {
      const messages = [mockMessage];
      const nextState = reducer(messages, new GetMessagesActionFail());
      expect(nextState).toEqual([]);
    });

  });

});