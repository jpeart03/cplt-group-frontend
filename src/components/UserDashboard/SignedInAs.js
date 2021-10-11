// import { useAuth } from "../../context/AuthContext.js";
import { useAuth } from "../../contexts/AuthContext.js";
import { Redirect } from "react-router";
import { useEffect } from "react";

const SignedInAs = () => {
  const { authLoading, currentUser, login, logout, register } = useAuth();

  // const dummyUser = {"pk":1,"username":"pgrov02","email":"pj@appappmail.com","first_name":"Penny","last_name":"Grover"}
  // let currentUser = dummyUser

  if (currentUser) {
    // console.log(currentUser);
    if (currentUser.first_name !== "") {
      let userFirstname = currentUser.first_name;
      return <h1>Signed in as {userFirstname}</h1>;
    } else {
      let userEmail = currentUser.email;
      return <h1>Signed in as {userEmail}</h1>;
    }
  } else {
    return <p>No User Signed In</p>;
  }
};

export default SignedInAs;
