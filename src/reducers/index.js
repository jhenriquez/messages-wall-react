/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as fromStatus from './status';
import * as fromMessage from './message';

import { IUser } from '../models/user';
import { IMessage } from '../models/message';

const reducersMap = {
  status: fromStatus,
  messages: fromMessage
};

const reducer = combineReducers(reducersMap);

type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export type State = {
  status: ApplicationStatus,
  user: null | IUser,
  messages: IMessage[]
};

export default reducer;