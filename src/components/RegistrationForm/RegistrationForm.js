import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";


const RegistrationForm = () => {
  const [usernameValue, setUsernameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [password2Value, setPassword2Value] = useState();
  const [firstNameValue, setFirstNameValue] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();

  const handelChangeValue = (e, setStateFunction) => {
    // do I preventDefault for a func that isn't async?
    // e.preventDefault()
    let value = e.target.value
    setStateFunction(value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log("SUBMIT BUTTON CLICKED Register")
  }


  return(
    <div>
        <Form method='POST' onSubmit={(e) => handleFormSubmit(e)}>
          <Form.Group className="mb-3" controlId="regFormUsername">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Choose a Username" onChange={(e) => handelChangeValue(e, setUsernameValue)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group className="mb-3" controlId="regFormEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" onChange={(e) => handelChangeValue(e, setEmailValue)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="regFormPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" onChange={(e) => handelChangeValue(e, setPhoneNumberValue)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )

}

export default RegistrationForm