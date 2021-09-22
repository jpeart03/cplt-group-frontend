// import { useAuth } from "../../context/AuthContext.js";
import { useAuth } from "../../contexts/AuthContext.js"
import { Redirect } from "react-router";

const SignedInAs = () => {
  
  const { authLoading, currentUser, login, logout, register} = useAuth();

  // const dummyUser = {"pk":1,"username":"pgrov02","email":"pj@appappmail.com","first_name":"Penny","last_name":"Grover"}
  // let currentUser = dummyUser


  if (currentUser) {
    let username = currentUser.username
    return (
      <div style={{display: 'flex',  justifyContent:'center'}}>
        <h3>Signed in as {username}</h3>
      </div>
    )  
  }

  else {
    return (<p>No User Signed In</p>)
  }
  
}

export default SignedInAs;