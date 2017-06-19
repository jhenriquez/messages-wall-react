import React, { Component } from 'react';

import PropTypes from 'prop-types';

interface IDefaultPropType {
  messages: any[];
}

export interface IMessageListPropType {
  messages: any[];
  empty?: string;
}

export default class MessageList extends Component<IDefaultPropType, IMessageListPropType, void> {
  static defaultProps: IDefaultPropType;

  render() {
    return (
      <div className="message-list">
        { this.props.empty ? <p className="empty-message">{ this.props.empty }</p> : null }
      </div>
    );
  }

}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  empty: PropTypes.string
};

MessageList.defaultProps = {
  messages: []
};