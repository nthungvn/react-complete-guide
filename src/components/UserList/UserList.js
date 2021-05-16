import Card from '../UI/Card/Card';
import UserItem from '../UserItem/UserItem';
import classes from './UserList.module.css';

const UserList = (props) => {
  if (!props.users || props.users.length === 0) {
    return (
      <Card className={classes.users}>
        <h2 className={classes['no-users']}>Found no users</h2>
      </Card>
    );
  }

  return (
    <Card className={classes.users}>
      <ul className={classes.items}>
        {props.users.map((user) => (
          <UserItem key={user.id} value={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
