import React, { useEffect, useState } from 'react';

const initialState = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};

const authContext = React.createContext(initialState);

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

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
