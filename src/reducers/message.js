import type { IMessage } from '../models/message';
import type { Action } from '../actions/message';

import { GET_MESSAGES_FAIL, GET_MESSAGES_SUCCESS } from '../actions/message';

export function reducer (state: IMessage[] = [], action: Action): IMessage[] {
  switch (action.type) {

    case GET_MESSAGES_SUCCESS:
      return action.payload;

    case GET_MESSAGES_FAIL:
      return [];

    default:
      return state;
  }
}