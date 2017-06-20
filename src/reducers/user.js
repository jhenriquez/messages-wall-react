import type { Action } from '../actions/user';

import { GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAIL } from '../actions/user';
import { IUser } from '../models/user';

function reducer (state: IUser, action: Action) : null | IUser {

  switch (action.type) {

    case GET_CURRENT_USER_SUCCESS:
      return action.payload;

    case GET_CURRENT_USER_FAIL:
      return null;

    default:
      return state;
  }

}


export default reducer;