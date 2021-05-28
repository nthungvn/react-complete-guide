import React, { useCallback, useState } from 'react';

const initialState = {
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const loginHandler = useCallback((token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
  }, []);

  const contextValue = {
    token,
    isLoggedIn: !!token,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
