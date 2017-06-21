import React from 'react';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

import type { State } from '../reducers';

export default class Application extends React.Component<void, void, State> {
  state: State;

  constructor (props: any) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <div>
        { this.state.status.isUserLoading ? <Loading /> : <Publish session={ this.state.session } /> }
        { this.state.status.isMessagesLoading ? <Loading /> : <MessageList messages={ this.state.messages } /> }
      </div>
    );
  }

}