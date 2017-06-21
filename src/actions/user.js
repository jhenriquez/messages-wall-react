import User from '../models/user';
import type { IUser } from '../models/user';

export const GET_CURRENT_USER = '[User] Get Current User';
export const GET_CURRENT_USER_SUCCESS = '[User] Get Current User Request Succeeded';
export const GET_CURRENT_USER_FAIL = '[User] Get Current User Request Failed';

/**
 * Triggers a request to retrieve the current user currently signed into the API.
 */
export class GetCurrentUserAction {
  type: string;
  payload: any;
  constructor () {
    this.type = GET_CURRENT_USER;
    this.payload = null;
  }
}

/**
 * Triggered when an asynchronous GET_CURRENT_USER operation completes successfully.
 */
export class GetCurrentUserActionSuccess {
  type: string;
  payload: IUser;

  constructor (payload: any) {
    this.type = GET_CURRENT_USER_SUCCESS;
    this.payload = new User(payload);
  }
 }

/**
 * Triggered when an asynchronous GET_CURRENT_USER operation resolves to an error.
 */
export class GetCurrentUserActionFail {
  type: string;
  payload: any;
  constructor (error: any) {
    this.type = GET_CURRENT_USER_FAIL;
    this.payload = error;
  }
}

export type Action = GetCurrentUserAction
                  | GetCurrentUserActionSuccess
                  | GetCurrentUserActionFail;