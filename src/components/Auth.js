import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import './Auth.css';
import Card from './UI/Card';

const Auth = (props) => {
  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    authCtx.login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
