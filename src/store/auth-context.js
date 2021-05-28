import React, { useCallback, useState } from 'react';

const initialState = {
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const loginHandler = useCallback((token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
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
