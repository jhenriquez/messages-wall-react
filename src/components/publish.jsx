import React from 'react';

export default class Publish extends React.Component {

  render() {
    const whenAnonymous = (
      <div className="anonymous-content">
        <p className="message">
          You need to either <a>signup</a> or <a>signin</a> before you can post any content.
        </p>
      </div>
    );

    return this.props.user ? null : whenAnonymous;
  }

};