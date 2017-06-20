import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Application from './containers/application';

import reducer from './reducers';

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