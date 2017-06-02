import React from 'react';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

export default class Application extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      status: {
        user: 'loading',
        messages: 'loading'
      },
      user: null,
      messages: []
    };
  }

  render() {
    return (
      <div>
        { this.state.status.user === 'loading' ? <Loading /> : <Publish user={ this.state.user } /> }
        { this.state.status.messages === 'loading' ? <Loading /> : <MessageList messages={ this.state.messages } /> }
      </div>
    );
  }

}