import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    super();
    this.state = { showUsers: true };
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  };

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('There are no users');
    }
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
