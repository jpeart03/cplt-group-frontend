import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authLoading, setAuthLoading] = useState();
  const [currentUser, setCurrentUser] = useState();

  const register = () => "register called";

  const login = () => "login called";

  const logout = () => "logout called";

  const value = {
    authLoading,
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
