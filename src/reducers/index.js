/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as statusReducer from './status';

import { IUser } from '../models/user';

const reducer = combineReducers({ status: statusReducer });

type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export type State = {
  status: ApplicationStatus,
  user: null | IUser
};

export default reducer;