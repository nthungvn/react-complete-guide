import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { changePassword } from '../../libs/firebase-api';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const { sendRequest, data, status } = useHttp(changePassword);

  console.log(data, status);

  const changePasswordHandler = (event) => {
    event.preventDefault();
    const password = passwordInputRef.current.value.trim();
    if (!password || password.length < 6) {
      return;
    }
    const idToken = localStorage.getItem('token');
    sendRequest({ password, idToken });
  };

  useEffect(() => {
    if (data && status === 'completed') {
      localStorage.setItem('token', data.idToken);
    }
  }, [data, status]);

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
