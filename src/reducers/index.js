/**
 * Reducers entry point module. Here the main application reducer is combined and exposed
 * as well as the application state.
 */

import { combineReducers } from 'redux';

import * as statusReducer from './status';

const reducer = combineReducers({ status: statusReducer });

type ApplicationStatus = { isUserLoading: boolean, isMessagesLoading: boolean };

export type ApplicationState = { status: ApplicationStatus };

export default reducer;