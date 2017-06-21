
import type { IUser } from '../models/user';

import type { Action } from '../actions/user';
import { GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL } from '../actions/user';

export type State = {
  isAnonymous: boolean;
  user: ?IUser;
}

export function reducer (state: State = { isAnonymous: true, user: null }, action: Action) : State {
  switch(action.type) {
    case GET_CURRENT_USER_SUCCESS:

      return Object.assign({}, state, {
        isAnonymous: false,
        user: action.payload
      });

    case GET_CURRENT_USER_FAIL:

      return Object.assign({}, state, {
        isAnonymous: true,
        user: null
      });

    default:
      return state;
  }
}