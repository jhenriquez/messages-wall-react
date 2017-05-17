import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Publish     from './components/publish';
import MessageList from './components/messageList';

class Container extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="content">
          <Publish />
          <MessageList />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);