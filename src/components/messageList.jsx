import React, { Component } from 'react';

import PropTypes from 'prop-types';

type PropType = { messages: any[], empty?: string };
type DefaultPropType = { messages: any[] };

export default class MessageList extends Component<DefaultPropType, PropType, void> {
  static defaultProps: DefaultPropType;

  render() {
    return (
      <div className="message-list">
        { this.props.empty ? <p className="empty-message">{ this.props.empty }</p> : null }
      </div>
    );
  }

};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  empty: PropTypes.string
};

MessageList.defaultProps = {
  messages: []
};