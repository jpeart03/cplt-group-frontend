import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'

const EditRecipientForm = (props) => {
  const [recName, setRecName] = useState();
  const [email, setEmail] = useState(props.recEmail);
  const [phone, setPhone] = useState();
// const [relationshipType, setRelationshipType] = useState();

  // useEffect( () => {
  //   if (props.selectedRecipient){
  //   let thisRec = JSON.parse(props.selectedRecipient)
  //   console.log("EDIT USEEFFECT thisRec: ", thisRec)
  //   setRecName(thisRec.recName)
  //   setEmail(thisRec.email)
  //   setPhone(thisRec.phone)
  //   }
  // }, [])

  if (props.selectedRecipient){
    

      return (
        <Form method="POST" onSubmit={(e) => { e.preventDefault()
          console.log("SUBMIT THE EDITS CLICKED")}}>
          <Form.Group className="mb-3" controlId="formRecipientName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={recName}
            onChange={(e) => {
              let value = e.target.value
              setRecName(value)
              }
              }
              />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={email} onChange={(e) => {
              let value = e.target.value
              setEmail(value)}
              }/>
            <Form.Text className="text-muted">
              We'll never share your recipient's email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formPhoneNum">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder={phone} onChange={(e) => {
              let value = e.target.value
              setPhone(value)}
              }/>
            <Form.Text className="text-muted">
              We'll never share your recipient's phone number with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
  }


  else {
    return (
      <Form method="POST" 
        onSubmit={(e) => { e.preventDefault()
        console.log("SUBMIT THE EDITS CLICKED")}
        }>
        <Form.Group className="mb-3" controlId="formRecipientName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Recipient's Name"
          onChange={(e) => {
            let value = e.target.value
            setRecName(value)}
          }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your recipient's email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNum">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter the recipient's phone/text number" />
          <Form.Text className="text-muted">
            We'll never share your recipient's phone number with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default EditRecipientForm