import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const storageKey = "userToken";
const apiUrl = process.env.REACT_APP_API_URL;
const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authToken, setAuthToken] = useState();
  const [currentUser, setCurrentUser] = useState();

  const getStorageToken = () => {
    const tokenString = localStorage.getItem(storageKey)
      ? `Token ${localStorage.getItem(storageKey)}`
      : null;
    setAuthToken(tokenString);
  };

  // Adding useEffect to grab token from localstorage & set AuthProvider state
  useEffect(() => {
    getStorageToken();
    const getUserData = async () => {
      setAuthLoading(true);
      if (authToken) {
        const { data } = await axios.get(`${apiUrl}/users/auth/user/`, {
          headers: {
            Authorization: authToken,
          },
        });
        // TODO check for successful response... handle errors.
        setCurrentUser(data);
      }
      setAuthLoading(false);
    };
    getUserData();
  }, [authToken]);

  /**
   * Function to register a new user
   * @param {string} username
   * @param {string} email
   * @param {string} password1
   * @param {string} password2
   */
  const register = (username, email, password1, password2) => {
    setAuthLoading(true);
    axios
      .post(`${apiUrl}/users/auth/register/`, {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((response) => {
        localStorage.setItem(storageKey, response.data.key);
        setAuthToken(`Token ${response.data.key}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  /**
   * Function to log in user
   * @param {string} email user's email
   * @param {string} password user's password
   */
  const login = (email, password) => {
    setAuthLoading(true);
    axios
      .post(`${apiUrl}/users/auth/login/`, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem(storageKey, response.data.key);
        setAuthToken(`Token ${response.data.key}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  /**
   * Function to log user out
   */
  const logout = () => {
    if (authToken) {
      setAuthLoading(true);
      axios
        .post(`${apiUrl}/users/auth/logout/`, {
          headers: {
            Authorization: authToken,
          },
        })
        .then(() => {
          localStorage.removeItem(storageKey);
          setAuthToken();
          setCurrentUser();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setAuthLoading(false);
        });
    }
  };

  const value = {
    authLoading,
    currentUser,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
