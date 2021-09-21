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

  const checkStorageToken = () => {
    console.log("checkStorageToken fired!");
    const tokenString = localStorage.getItem(storageKey)
      ? `Token ${localStorage.getItem(storageKey)}`
      : null;
    setAuthToken(tokenString);
  };

  // Adding useEffect to grab token from localstorage & set AuthProvider state
  useEffect(() => {
    checkStorageToken();
    const getUserData = async () => {
      if (authToken) {
        const { data } = await axios.get(`${apiUrl}/users/auth/user/`, {
          headers: {
            Authorization: authToken,
          },
        });
        // TODO check for successful response... handle errors.
        setCurrentUser(data);
      }
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
  const register = async (username, email, password1, password2) => {
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
      });
  };

  /**
   * Function to log in user
   * @param {string} email user's email
   * @param {string} password user's password
   */
  const login = async (email, password) => {
    await axios
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
      });
  };

  /**
   * Function to log user out
   */
  const logout = async () => {
    if (authToken) {
      await axios
        .post(`${apiUrl}/users/auth/logout/`, {
          headers: {
            Authorization: authToken,
          },
        })
        .then(() => {
          localStorage.removeItem(storageKey);
          setAuthToken();
          setCurrentUser();
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
