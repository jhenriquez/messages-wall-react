/**
 * This reducer manages exclusively status changes that are relevant to the application by listening to all operations.
 */
import { GET_CURRENT_USER, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS } from '../actions/user';
import { GET_MESSAGES, GET_MESSAGES_FAIL, GET_MESSAGES_SUCCESS } from '../actions/message';

import type { Action as UserAction } from '../actions/user';
import type { Action as MessageAction } from '../actions/message';

export type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export default function reducer (state: ApplicationStatus, action: UserAction | MessageAction) : ApplicationStatus {
  switch (action.type) {
    case GET_CURRENT_USER:
      return Object.assign({}, state, { isUserLoading: true });

    case GET_CURRENT_USER_FAIL:
    case GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { isUserLoading: false });

    case GET_MESSAGES:
      return Object.assign({}, state, { isMessagesLoading: true });

    case GET_MESSAGES_FAIL:
    case GET_MESSAGES_SUCCESS:
      return Object.assign({}, state, { isMessagesLoading: false });

    default:
      return state;
  }
}