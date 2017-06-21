import React from 'react';
import { connect } from 'react-redux';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';

import { initialState } from '../reducers';

import type { State } from '../reducers';

export class Application extends React.Component<State, State, void> {
  static defaultProps: State;
  render() {
    return (
      <div>
        { this.props.status.isUserLoading ? <Loading /> : <Publish session={ this.props.session } /> }
        { this.props.status.isMessagesLoading ? <Loading /> : <MessageList messages={ this.props.messages } /> }
      </div>
    );
  }

}

Application.defaultProps = initialState;

export const mapStateToProps = (state: State) => state;

export default connect(mapStateToProps)(Application);