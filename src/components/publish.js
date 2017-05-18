import React    from 'react';
import ReactDom from 'react-dom';

import Loading from './loading';

export default class Publish extends React.Component {
  render() {
    return this.props.auth.isLoading ?
      <Loading message="Authenticating!" /> :
      (<div>
        <h1>Publish Here!</h1>
      </div>);
  }
}