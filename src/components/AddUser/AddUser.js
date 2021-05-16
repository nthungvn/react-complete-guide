import { useState } from 'react';
import Alert from '../Alert/Alert';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './AddUser.module.css';

const UserInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isShowAlert, setIsShowAlert] = useState(false);
  let [message, setMessage] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setMessage('Please enter a valid name and age (non-empty values)');
      setIsShowAlert(true);
      return;
    } else if (+enteredAge <= 0) {
      setMessage('Please enter a valid age (> 0)');
      setIsShowAlert(true);
      return;
    }

    setEnteredUserName('');
    setEnteredAge('');

    props.onAddUser({
      id: Math.random(),
      userName: enteredUserName,
      age: +enteredAge,
    });
  };

  const userNameInputHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageInputHandler = (event) => {
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
              value={enteredUserName}
              onInput={userNameInputHandler}
              type="text"
            />
          </div>
          <div className={classes['form-control']}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onInput={ageInputHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
