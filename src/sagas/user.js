import { takeEvery } from 'redux-saga';
import { apply, put } from 'redux-saga/effects';

import * as UserActions from '../actions/user';
import type { IUser } from '../models/user';
import type { Action } from '../actions/user';

import UserService from '../services/userService';

const service = new UserService();

/**
 *
 * Executes a request to the backend API every time the GET_CURRENT_USER action is dispatched.
 * When successful it resolves to a GET_CURRENT_USER_SUCCESS action, passing along the response user.
 * In case of errors during the request it resolves to a GET_CURRENT_USER_FAIL action.
 *
 */
export const getCurrentUserSaga: * = function* (): Generator<Promise<IUser> | Action, void, void | IUser | any> {
  try {
    const user = yield apply(service, service.getCurrentUser);
    yield put(new UserActions.GetCurrentUserActionSuccess(user));
  } catch (error) {
    yield put(new UserActions.GetCurrentUserActionFail(error));
  }
}

export default function* userSagas (): Generator<any, void, void> {
  yield takeEvery(UserActions.GET_CURRENT_USER, getCurrentUserSaga);
}