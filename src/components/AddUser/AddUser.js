import { useState } from 'react';
import Alert from '../Alert/Alert';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './AddUser.module.css';

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  let [message, setMessage] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setMessage('Please enter a valid name and age (non-empty values)');
      setIsShowAlert(true);
      return;
    }
    if (+enteredAge <= 0) {
      setMessage('Please enter a valid age (> 0)');
      setIsShowAlert(true);
      return;
    }

    setEnteredUsername('');
    setEnteredAge('');

    props.onAddUser({
      id: Math.random(),
      username: enteredUsername,
      age: +enteredAge,
    });
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const dismissHandler = () => {
    setIsShowAlert(false);
  };

  return (
    <div>
      <Alert
        onOkClick={dismissHandler}
        onBackdropClick={dismissHandler}
        visible={`${isShowAlert}`}
        headerText="Invalid input"
        message={message}
      />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className={classes['form-control']}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredUsername}
              onChange={usernameChangeHandler}
              type="text"
            />
          </div>
          <div className={classes['form-control']}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
