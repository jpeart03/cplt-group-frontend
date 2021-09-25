import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { editRecipient } from "../../api/recipientCalls";
import { useAuth } from "../../contexts/AuthContext";
import { deleteRecipient  } from "../../api/recipientCalls";

const EditRecipientForm = (props) => {
  const [firstName, setFirstName]= useState();
  const [lastName, setLastName]= useState();
  const [relationshipType, setRelationshipType ]= useState();
  const [email, setEmail]= useState();
  const [phone, setPhone]= useState();
  const [recipientID, setRecipientID] = useState();

  const { authToken, currentUser } = useAuth();

  useEffect( () => 
    {
      if (props.selectedRecipient){
        let parsedRec = JSON.parse(props.selectedRecipient)
        console.log("selectedRecipient.first_name is: ", parsedRec.first_name)
        setFirstName(parsedRec.first_name)
        setLastName(parsedRec.last_name)
        setRelationshipType(parsedRec.relationship_type)
        setEmail(parsedRec.email)
        setPhone(parsedRec.phone)
        setRecipientID(parsedRec.id)
      }
    }, [props.selectedRecipient]
    // needs to make a new API Fetch when any recipient is updated
  )

  if (props.selectedRecipient){
    // setFirstName(props.selectedRecipient.first_name)
    // setLastName(props.selectedRecipient.last_name)
    // setRelationshipType(props.selectedRecipient.relationship_type)
    // setEmail(props.selectedRecipient.email)
    // setPhone(props.selectedRecipient.phone)
    

      return (
        <Form method="PUT" onSubmit={(e) => { 
          e.preventDefault()
          let recipientValues = {
            "user": currentUser.pk,
            "first_name": firstName,
            "last_name": lastName,
            "relationship_type": relationshipType,
            "email": email,
            "phone": phone,
            "id": recipientID
            }
          // console.log("recipientValues in Form: ", recipientValues)
          editRecipient(recipientValues, authToken)
          props.setSelectedRecipient(null)
          document.getElementById("select-recipient-dropdown").selectedIndex = "0";
            // make new API call to get fresh/updated info on recipients
          props.setRefreshRecCall(!props.refreshRecCall)
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
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={email} onChange={(e) => {
          let value = e.target.value
          setEmail(value)
          }}/>
            <Form.Text className="text-muted">
              We'll never share your recipient's email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRelationshipType">
            <Form.Label>Relationship Type</Form.Label>
            {/* <Form.Control type="email" placeholder="Relationship Type" /> */}
            <Form.Select aria-label="Default select example" value={relationshipType}
                onChange={(e) => {
                  let relationshipSelected = e.target.value
                  // console.log("in SelectRecipient: ", recipientSelected)
                  setRelationshipType(relationshipSelected)
                  }}>
              <option>Personal</option>
              <option>Professional</option>
            </Form.Select>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formPhoneNum">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder={phone} onChange={(e) => {
          let value = e.target.value
          setPhone(value)
          }}/>
            <Form.Text className="text-muted">
              We'll never share your recipient's phone number with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="danger" 
          onClick={(e) =>{
            console.log("Delete ", recipientID)
            deleteRecipient(recipientID, authToken)
            props.setSelectedRecipient(null)
            document.getElementById("select-recipient-dropdown").selectedIndex = "0";
            props.setRefreshRecCall(!props.refreshRecCall)
          }}>Delete {firstName} {lastName}</Button>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )
  }


  else {
    return (<p> Please select a recipient to edit</p>
    )
  }
}

export default EditRecipientForm