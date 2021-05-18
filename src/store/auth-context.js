import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export default AuthContext;
