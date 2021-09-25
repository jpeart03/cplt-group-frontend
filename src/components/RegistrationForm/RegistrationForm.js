import { Form,  } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import LoadingButton from "../LoadingButton/LoadingButton.js"

const RegistrationForm = () => {
  const [usernameValue, setUsernameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [password2Value, setPassword2Value] = useState();
  const [firstNameValue, setFirstNameValue] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  const { authLoading,
    register,} = useAuth();
  let history = useHistory();

  const handelChangeValue = (e, setStateFunction) => {
    // do I preventDefault for a func that isn't async?
    // e.preventDefault()
    let value = e.target.value
    setStateFunction(value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log("SUBMIT BUTTON CLICKED Register")
    register(usernameValue, emailValue, passwordValue, password2Value, firstNameValue, lastNameValue, phoneNumberValue)
    history.push("/dashboard")

  }

  return(
    <div>
        <Form method='POST' onSubmit={(e) => handleFormSubmit(e)}>
          <Form.Group className="mb-3" controlId="regFormUsername">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter your email" onChange={(e) => handelChangeValue(e, setEmailValue)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="regFormUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Choose a username" onChange={(e) => handelChangeValue(e, setUsernameValue)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="regFormPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Choose a password" onChange={(e) => handelChangeValue(e, setPasswordValue)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regFormConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Type your password again" onChange={(e) => handelChangeValue(e, setPassword2Value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regFormFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" onChange={(e) => handelChangeValue(e, setFirstNameValue)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regFormLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" onChange={(e) => handelChangeValue(e, setLastNameValue)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regFormPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" onChange={(e) => handelChangeValue(e, setPhoneNumberValue)}/>
          </Form.Group>
          <LoadingButton variant="primary" type="submit" text="Submit" isLoading={authLoading}/>
        </Form>
    </div>
  )
}

export default RegistrationForm