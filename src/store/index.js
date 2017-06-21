import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';

import classToAction from '../middleware/classToAction';

import type { State } from '../reducers';

const devStore = (reducer: Function, initialState: State) => createStore(reducer, initialState, composeWithDevTools(applyMiddleware(reduxSaga, classToAction)));

export const reduxSaga = createSagaMiddleware();

export const configureStore = devStore;