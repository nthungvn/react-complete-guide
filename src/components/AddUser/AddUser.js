import { Fragment, useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const enteredUsernameRef = useRef();
  const enteredAgeRef = useRef();

  const [isShowModal, setIsShowModal] = useState(false);
  const [error, setError] = useState({});

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = enteredUsernameRef.current.value.trim();
    const enteredAge = enteredAgeRef.current.value.trim();

    if (enteredUsername === 0 || enteredAge === 0) {
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

    enteredUsernameRef.current.value = '';
    enteredAgeRef.current.value = '';

    props.onAddUser({
      id: Math.random(),
      username: enteredUsername,
      age: +enteredAge,
    });
  };

  const confirmHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Fragment>
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
              type="text"
              ref={enteredUsernameRef}
            />
          </div>
          <div className={classes['form-control']}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={enteredAgeRef}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
