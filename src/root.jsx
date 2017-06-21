import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

const store = createStore(reducer, initialState);

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