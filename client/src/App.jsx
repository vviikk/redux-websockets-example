import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startUp } from './actions';
import JoinForm from './ui/JoinForm';
import SendMessageForm from './ui/SendMessageForm';
import MessageList from './ui/MessageList';
import UserList from './ui/UserList';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="messages-and-users">
          <MessageList />
          <UserList />
        </div>
        {this.props.currentUser ? <SendMessageForm /> : <JoinForm />}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps)(App);
