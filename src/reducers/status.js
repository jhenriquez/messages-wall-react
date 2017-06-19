/**
 * This reducer manages exclusively status changes that are relevant to the application by listening to all operations.
 */
import { GET_CURRENT_USER, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS } from '../actions/user';

import type { Action as UserAction } from '../actions/user';

export type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export default function reducer (state: ApplicationStatus, action: UserAction) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return Object.assign({}, state, { isUserLoading: true });

    case GET_CURRENT_USER_FAIL:
    case GET_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, { isUserLoading: false });

    default:
      return state;
  }
}