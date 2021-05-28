import React, { useState } from 'react';

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
