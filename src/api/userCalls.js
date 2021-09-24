import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const storageKey = "userToken";

const fetchUser = () => {
  return fetch(`${apiUrl}/users/auth/user/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem(storageKey)}`
    }
  })
    .then(response => response.json())
};

const login = (email, password) => {
  axios
  .post(`${apiUrl}/users/auth/login/`, {
    email: email,
    password: password,
  })
    .then((response) => response.json())
};

const register = (username, email, password1, password2, first_name, last_name, phone_number) => {
  axios
  .post(`${apiUrl}/users/auth/register/`, {
    username: username,
    email: email,
    password1: password1,
    password2: password2,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number
  })
    .then((response) => response.json());
};

const logout = () => {
  return fetch(`${apiUrl}/users/auth/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem(storageKey)}`
    }
  })
    .then(response => response.json())
};

const fetchAllUsers = async (token)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem(storageKey)}` 
    },
    }
  try{
    console.log("FETCHALL ENTER TRY")
    let response = await fetch(`${apiUrl}/users/recipients`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}


export {
  fetchAllUsers,
  fetchUser,
  login,
  register,
  logout,
}