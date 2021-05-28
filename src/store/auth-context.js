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

  const expireIn = localStorage.getItem('expireIn');
  let timer;

  if (expireIn) {
    timer = setTimeout(() => {
      logoutHandler();
    }, expireIn - Date.now());
  }

  const loginHandler = useCallback((token, expirationTime) => {
    localStorage.setItem('token', token);
    const expiresIn = Date.now() + expirationTime;
    localStorage.setItem('expireIn', expiresIn);
    setToken(token);
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('expireIn');
    setToken(null);
    clearTimeout(timer);
  }, [timer]);

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
