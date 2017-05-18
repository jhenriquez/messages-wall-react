import React    from 'react';
import ReactDom from 'react-dom';

import Loading from './loading';

export default class Publish extends React.Component {

  render() {
    const whenLoading = <Loading message="Retrieving messages..." />;

    const whenAnonymous = (<div>You can't post when anonymous!</div>);

    const whenAuthenticated = (
      <div id="publish-container">
        <div id="publishing-user">
        </div>
        <div id="publishing-content">
        </div>
      </div>);

    return this.props.auth.isLoading ? whenLoading :
      this.props.auth.user ? whenAuthenticated : whenAnonymous;
  }

}