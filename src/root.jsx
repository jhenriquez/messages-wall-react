import React             from 'react';
import ReactDOM          from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Application from './containers/application';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={ Application } />
  </BrowserRouter>
 );

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);