import React from 'react';
import { connect } from 'react-redux';

import Loading from '../components/loading';
import Publish from '../components/publish';
import MessageList from '../components/messageList';
import { initialState } from '../reducers';
import * as UserActions from '../actions/user';

import type { State } from '../reducers';

type PropType = State & {
  onGetCurrentUser: Function;
}

export class Application extends React.Component<PropType, PropType, void> {
  static defaultProps: PropType;

  render() {
    return (
      <div>
        { this.props.status.isUserLoading ? <Loading /> : <Publish session={ this.props.session } /> }
        { this.props.status.isMessagesLoading ? <Loading /> : <MessageList messages={ this.props.messages } /> }
      </div>
    );
  }

  componentDidMount () {
    this.props.onGetCurrentUser();
  }

}

Application.defaultProps = Object.assign({}, initialState, {
  onGetCurrentUser: () => null
});

export const mapDispatchToProps = (dispatch: Function) => {
  return {
    onGetCurrentUser: () => dispatch(new UserActions.GetCurrentUserAction())
  };
};

export const mapStateToProps = (state: State) => state;

export default connect(mapStateToProps, mapDispatchToProps)(Application);