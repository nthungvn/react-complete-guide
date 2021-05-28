import { Link, useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem('token');
    history.push('/auth');
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
