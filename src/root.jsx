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
      auth: {
        isLoading: true,
        user: null
      },
      messages: {
        isLoading: true,
        list: []
      }
    };
  }

  render() {
    return (
      <div id="container">
        <div id="content">
          <Publish auth={ this.state.auth } />
          <MessageList messages={ this.state.messages } />
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