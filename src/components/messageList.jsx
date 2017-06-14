import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class MessageList extends Component<any,any,any> {

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