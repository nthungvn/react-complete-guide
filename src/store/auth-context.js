import React, { useCallback, useState } from 'react';

const initialState = {
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

const getStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const expireIn = localStorage.getItem('expiresAtInMs');
  const remainingTimeInMs = +expireIn - Date.now();

  if (remainingTimeInMs <= 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAtInMs');
    return { token: null, remainingTimeInMs: 0 };
  }
  return { token: storedToken, remainingTimeInMs: remainingTimeInMs };
};

export const AuthContextProvider = (props) => {
  const storedToken = getStoredToken();
  const [token, setToken] = useState(storedToken.token);

  const expireIn = storedToken.remainingTimeInMs;
  let timer;

  if (expireIn > 0) {
    timer = setTimeout(() => {
      logoutHandler();
    }, expireIn);
  }

  const loginHandler = useCallback((token, expiresIn) => {
    localStorage.setItem('token', token);
    const expiresAt = Date.now() + expiresIn * 1000;
    localStorage.setItem('expiresAtInMs', expiresAt);
    setToken(token);
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAtInMs');
    timer && clearTimeout(timer);
    setToken(null);
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
