import { Accordion, Form, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useAuth } from "../../contexts/AuthContext";


const EditProfileForm = (props) => {
  const [userName, setuserName]= useState();
  const [email, setEmail]= useState();
  const [firstName, setFirstName]= useState();
  const [lastName, setLastName]= useState();
  const [phone, setPhone]= useState();

  const { authToken, currentUser, edit } = useAuth();

  useEffect( () => 
    {
      if (currentUser){
        console.log("currentUser.first_name is: ", currentUser.first_name)
        setuserName(currentUser.username)
        setFirstName(currentUser.first_name)
        setLastName(currentUser.last_name)
        setEmail(currentUser.email)
        setPhone(currentUser.phone)
      }
    }, [currentUser]
  )

  return (
    < Form method="PUT" onSubmit={(e) => { 
      e.preventDefault()
      let userValues = {
        "first_name": firstName,
        "last_name": lastName,
        "username": userName,
        "email": email,
        "phone": phone,
        }
      edit(userValues)
    }}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder={firstName} 
        onChange={(e) => {
          let value = e.target.value
          setFirstName(value)
          }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder={lastName} onChange={(e) => {
        let value = e.target.value
        setLastName(value)
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder={userName} onChange={(e) => {
        let value = e.target.value
        setuserName(value)
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder={email} onChange={(e) => {
      let value = e.target.value
      setEmail(value)
      }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNum">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder={phone} onChange={(e) => {
      let value = e.target.value
      setPhone(value)
      }}/>
      </Form.Group>

      <Button variant="primary" type="submit">
          Update
      </Button>

      <Button variant="danger" 
        onClick={(e) =>{
          console.log("Delete Profile")
        }}>Delete User Profile 
      </Button>

    </Form>

      
      )
  }


export default EditProfileForm