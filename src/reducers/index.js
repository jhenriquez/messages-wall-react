/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as fromStatus from './status';
import * as fromMessages from './message';
import * as fromSession from './session';

import type { IMessage } from '../models/message';

import type { State as SessionState } from './session';

const reducersMap = {
  status: fromStatus.reducer,
  messages: fromMessages.reducer,
  session: fromSession.reducer
};

const reducer = combineReducers(reducersMap);

type ApplicationStatus = {
  isUserLoading: boolean,
  isMessagesLoading: boolean
};

export type State = {
  status: ApplicationStatus;
  messages: IMessage[];
  session: SessionState;
};

export const initialState = {
  messages: [],
  status: {
    isUserLoading: true,
    isMessagesLoading: true
  },
  session: {
    isAnonymous: true,
    user: null
  }
};

export default reducer;