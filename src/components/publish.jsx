import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import type { IUser } from '../models/user';

type ISession = {
  isAnonymous: boolean;
  user: ?IUser;
}

type PropType = {
  session: ISession;
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

export default class Publish extends React.Component<PropType, PropType, void> {

  static defaultProps: PropType;

  render() {
    return (
      <div className="publish-content">
        { this.props.session.isAnonymous ? <AnonymousPublisher /> : null }
      </div>
    );
  }

}

Publish.defaultProps = {
  session: {
    isAnonymous: true,
    user: null
  }
};