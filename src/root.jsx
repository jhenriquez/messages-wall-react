import React     from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

import Publish     from './components/publish';
import MessageList from './components/messageList';
import UserService from './services/userService';


class Container extends React.Component {

  constructor (props) {
    super(props);

    this.userService = new UserService();

    this.state = {
      status: {
        auth: 'loading',
        messages: 'loading'
      },
      user: null,
      messages: []
    };
  }

  render() {
    return (
      <div id="container">
        <div id="content">
          <Publish status={ this.state.status.auth } user={ this.state.user } />
          <MessageList status={ this.state.status.messages } messages={ this.state.messages } />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.userService
        .getCurrentUser()
        .then((rs) => {

          if (rs.status === 200) {
            this.setState({ auth: { user: rs.body } });
          }

          this.setState({ auth: { isLoading: false } });

        });
  }

}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);