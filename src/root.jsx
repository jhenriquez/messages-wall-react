import 'babel-polyfill';

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { reduxSaga, configureStore } from './store';

import UserSagas from './sagas/user';

import Application from './containers/application';

import reducer from './reducers';

const initialState = {
  status: {
    isUserLoading: true,
    isMessagesLoading: true
  },
  messages: [],
  session: {
    isAnonymous: true,
    user: null
  }
};

const store = configureStore(reducer, initialState);

reduxSaga.run(UserSagas);

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