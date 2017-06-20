import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Application from './containers/application';

import reducer from './reducers';

import type { State } from './reducers';

import type { Action as UserAction } from './actions/user';
import type { Action as MessageAction } from './actions/message';

type Action = UserAction | MessageAction;

const store = createStore(reducer);

const Routes = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Route path="/" component={ Application } />
    </BrowserRouter>
  </Provider>
 );

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);