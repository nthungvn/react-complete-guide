import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useHttp from '../../hooks/use-http';
import { signIn, signUp } from '../../libs/firebase-api';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { sendRequest, data, status, error } = useHttp(
    isLogin ? signIn : signUp
  );
  const authCtx = useContext(AuthContext);
  const { replace } = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();

    if (!email || !email.includes('@') || !password || password.length < 6) {
      return;
    }

    sendRequest({ email, password });
  };

  useEffect(() => {
    if (data && status === 'completed') {
      authCtx.login(data.idToken, +data.expiresIn);
      replace('/');
    }
  }, [status, data, authCtx, replace]);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {status !== 'pending' && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {status === 'pending' && <p>Sending...</p>}
          {error && <p>{error}</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
