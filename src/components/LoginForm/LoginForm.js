import { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import { Redirect } from "react-router";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const { login } = useAuth();
  let history = useHistory();

  const handelChangeValue = (e, setStateFunction) => {
    // do I preventDefault for a func that isn't async?
    // e.preventDefault()
    let value = e.target.value;
    setStateFunction(value);
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    login(emailValue, passwordValue)
    history.push("/dashboard")
  }

    return (
      <div>
        <Form method="POST" onSubmit={(e) => handleFormSubmit(e)}>
          <Form.Group className="mb-3" controlId="loginFormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              onChange={(e) => handelChangeValue(e, setEmailValue)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="loginFormPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => handelChangeValue(e, setPasswordValue)}
            />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default LoginForm;
