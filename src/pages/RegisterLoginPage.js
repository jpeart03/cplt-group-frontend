import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Redirect } from "react-router-dom"; 
import { Card } from "react-bootstrap";
import { useState } from "react";

const RegisterLoginPage = () => {
  // use UserAuthContext to get the state logged in or not
  // customize this to Jim's Context
  // const { loggedinBool, currentUserObj, token, getCookie, deleteCookies } = useMemberAuth();

  // DUMMY DATA- set loggedinBool to false so that it will run 
  const loggedinBool = false

  
  // depending on the Auth context, loggedinBool may be replaced with currentUserObj to determine if anyone is logged in
  // From logged in, user shouldn't be able to get to this endpoint bc Nav should hide Login/Register if someone is logged in
  if (loggedinBool === true){
    return <Redirect to="/home" />
  }

  else {
    return (
      <div>
        <div>
          <Card className="example-card" style={{ width: '24em'}}>
          <Card.Body>
            <Card.Title>
              <h4>Already Registered?</h4>
            </Card.Title>
            <h3>Please Log In</h3>
            <LoginForm/>
          </Card.Body>
          </Card>
        </div>

        <div>
          <Card className="example-card" style={{ width: '24em'}}>
            <Card.Body>
              <Card.Title>
                <h4>New Here?</h4>
                <h3>Register as a New User</h3>
              </Card.Title>
            <RegistrationForm/>
            </Card.Body>
          </Card>
        </div>

      </div>
    )
  }


}

export default RegisterLoginPage