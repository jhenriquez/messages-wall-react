/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as status from './status';
import * as messages from './message';
import * as user from './user';

import { IUser } from '../models/user';
import { IMessage } from '../models/message';

const reducer = combineReducers({ status, messages, user });

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