import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};

const authContext = React.createContext(initialState);

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const history = useHistory();

  const login = () => {
    setIsAuth(true);

    setTimeout(() => {
      setIsAuth(false);
    }, 20_000);
  };

  const logout = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    if (!isAuth) {
      localStorage.removeItem('token');
      history.push('/auth');
    }
  }, [isAuth, history]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        isAuth,
        login,
        logout,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
