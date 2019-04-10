import React from "react";
import { connect } from "react-redux";
import User from "./components/User";

const UserList = ({ users, userIdsTyping }) => (
  <div class="user-list">
    <strong>Users</strong>
    <div>
      {users.map(({ id, name }) => (
        <User key={id} name={name} typing={userIdsTyping[id]} />
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ users, userIdsTyping }) => ({
  users,
  userIdsTyping,
});

export default connect(mapStateToProps)(UserList);
