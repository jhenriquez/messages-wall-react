import React     from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';

import Publish     from './components/publish';
import MessageList from './components/messageList';


class Container extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      auth: {
        isLoading: true,
        user: null
      }
    };
  }

  render() {
    return (
      <div id="container">
        <div id="content">
          <Publish auth={ this.state.auth } />
          <MessageList />
        </div>
      </div>
    );
  }

  componentDidMount() {

  }

}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);