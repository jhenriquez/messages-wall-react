import React from 'react';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

import type { ApplicationState } from '../reducers';

export default class Application extends React.Component<void, void, ApplicationState> {
  state: ApplicationState;

  constructor (props: any) {
    super(props);
    this.state = {
      status: {
        isUserLoading: true,
        isMessagesLoading: true
      },
      user: null,
      messages: []
    };
  }

  render() {
    return (
      <div>
        { this.state.status.isUserLoading ? <Loading /> : <Publish user={ this.state.user } /> }
        { this.state.status.isMessagesLoading ? <Loading /> : <MessageList messages={ this.state.messages } /> }
      </div>
    );
  }

}