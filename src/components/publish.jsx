import React from 'react';

export class AnonymousPublisher extends React.Component {
  render() {
    return (
        <div className="anonymous-content">
          <p className="message">
            You need to either <a>signup</a> or <a>signin</a> before you can post any content.
          </p>
        </div>
    );
  }
}

export default class Publish extends React.Component {

  render() {

    return (
      <div className="publish-content">
        { this.props.user ? null : <AnonymousPublisher /> }
      </div>
    );
  }

};