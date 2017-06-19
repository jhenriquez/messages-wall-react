import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { IUser } from '../models/user';

export interface IPublishPropType {
  user: IUser;
}

export class AnonymousPublisher extends Component {
  render() {
    return (
        <div className="anonymous-content">
          <p className="message">
            You need to either <Link to="/signup">signup</Link> or <Link to="/signin">signin</Link> before you can post any content.
          </p>
        </div>
    );
  }
}

export default class Publish extends React.Component<void, IPublishPropType, void> {

  render() {
    return (
      <div className="publish-content">
        { this.props.user ? null : <AnonymousPublisher /> }
      </div>
    );
  }

}