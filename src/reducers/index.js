/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as fromStatus from './status';
import * as fromMessages from './message';

import { IMessage } from '../models/message';

const reducersMap = {
  status: fromStatus.reducer,
  messages: fromMessages.reducer
};

const reducer = combineReducers(reducersMap);

type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export type State = {
  status: ApplicationStatus,
  messages: IMessage[]
};

export default reducer;