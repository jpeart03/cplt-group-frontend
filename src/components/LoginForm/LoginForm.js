import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";


const LoginForm = () => {
  const [usernameValue, setUsernameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const { login } = useAuth();

  const handelChangeValue = (e, setStateFunction) => {
    // do I preventDefault for a func that isn't async?
    // e.preventDefault()
    let value = e.target.value
    setStateFunction(value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log("SUBMIT BUTTON CLICKED LOGIN")
    login(usernameValue, passwordValue)
  }

  return(
    <div>
      <Form method='POST' onSubmit={(e) => handleFormSubmit(e)}>
        <Form.Group className="mb-3" controlId="loginFormUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={(e) => handelChangeValue(e, setUsernameValue)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginFormPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your Password" onChange={(e) => handelChangeValue(e, setPasswordValue)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )

}

export default LoginForm