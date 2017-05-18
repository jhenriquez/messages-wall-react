import React    from 'react';
import ReactDOM from 'react-dom';

import Loading from './loading';

export default class MessageList extends React.Component {
  render() {
    return this.props.messages.isLoading ?
      <Loading message="Retrieving messages..." /> :
      <h1>Messages here!</h1>;
  }
}