import { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import useHttp from '../../hooks/use-http';
import { changePassword } from '../../libs/firebase-api';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const { sendRequest, data, status, error } = useHttp(changePassword);
  const { token } = useContext(AuthContext);
  const { push } = useHistory();

  console.log(data, status);

  const changePasswordHandler = (event) => {
    event.preventDefault();
    const password = newPasswordInputRef.current.value.trim();
    if (!password || password.length < 6) {
      return;
    }
    sendRequest({ password, idToken: token });
  };

  useEffect(() => {
    if (data && status === 'completed') {
      push('/');
    }
  }, [data, status, push]);

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        {status !== 'pending' && <button>Change Password</button>}
        {status === 'pending' && <p>Sending...</p>}
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default ProfileForm;
