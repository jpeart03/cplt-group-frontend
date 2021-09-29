import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Redirect, Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./RegisterLogin.scss";

const RegisterPage = () => {
  // use UserAuthContext to get the state logged in or not
  // customize this to Jim's Context
  // const { loggedinBool, currentUserObj, token, getCookie, deleteCookies } = useMemberAuth();

  // DUMMY DATA- set loggedinBool to false so that it will run
  const loggedinBool = false;

  // depending on the Auth context, loggedinBool may be replaced with currentUserObj to determine if anyone is logged in
  // From logged in, user shouldn't be able to get to this endpoint bc Nav should hide Login/Register if someone is logged in
  if (loggedinBool === true) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <>
        <Card className="auth-card">
          <Card.Body>
            <Card.Title>
              <h4>Register as a New User</h4>
            </Card.Title>
            <RegistrationForm />
          </Card.Body>
          <Card.Body style={{ borderTop: "1px solid #dfdfdf" }}>
            <span className="me-1">Already have an account?</span>
            <Card.Link as={Link} to="/login">
              Login
            </Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default RegisterPage;
