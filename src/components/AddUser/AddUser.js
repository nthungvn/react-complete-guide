import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [error, setError] = useState({});

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      setIsShowModal(true);
      return;
    }
    if (+enteredAge <= 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      setIsShowModal(true);
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

  const confirmHandler = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      <Modal
        onConfirm={confirmHandler}
        visible={`${isShowModal}`}
        title={error.title}
        message={error.message}
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

export default AddUser;
