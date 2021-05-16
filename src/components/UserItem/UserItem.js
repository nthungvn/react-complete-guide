import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={classes.user}>
      {props.value.username} ({props.value.age} years old)
    </li>
  );
};

export default UserItem;
