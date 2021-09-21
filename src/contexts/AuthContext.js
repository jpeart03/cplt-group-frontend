import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authLoading, setAuthLoading] = useState();
  const [currentUser, setCurrentUser] = useState();

  const register = (username, email, password1, password2, first_name, last_name, phone_number) => console.log("register in Context", username, phone_number);

  const login = (username, password) => console.log("login in Context", username, password)

  const logout = () => "logout called";

  const value = {
    authLoading,
    currentUser,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// const { authLoading, currentUser, login, logout, register} = useAuth();