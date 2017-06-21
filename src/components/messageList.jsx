import React, { Component } from 'react';

import PropTypes from 'prop-types';

type DefaultPropType = {
  messages: any[];
}

type PropType = {
  messages: any[];
  empty?: string;
}

export default class MessageList extends Component<DefaultPropType, PropType, void> {
  static defaultProps: DefaultPropType;

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