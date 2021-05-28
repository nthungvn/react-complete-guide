import { useContext } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(authContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isAuth && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {authCtx.isAuth && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {authCtx.isAuth && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
