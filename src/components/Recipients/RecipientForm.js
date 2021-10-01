import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import * as Yup from "yup";

const RecipientForm = () => {
  const { currentUser } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      relationshipType: "Personal",
    },
    validationSchema: Yup.object({}),
  });

  return (
    <Form
      id="newRecForm"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        let recipientValues = {
          first_name: firstName,
          last_name: lastName,
          relationship_type: relationshipType,
          email: email,
          phone: phone,
          user: currentUser.id,
        };
        console.log("NewRecForm onsubmit recipientValues: ", recipientValues);
        createNewRecipient(recipientValues, authToken);
        props.setRefreshRecCall(!props.refreshRecCall);
        // toast successmessage here
        document.getElementById("newRecForm").reset();
      }}
    >
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder={firstName}
          onChange={(e) => {
            let value = e.target.value;
            setFirstName(value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder={lastName}
          onChange={(e) => {
            let value = e.target.value;
            setLastName(value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder={email}
          onChange={(e) => {
            let value = e.target.value;
            setEmail(value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your recipient's email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRelationshipType">
        <Form.Label>Relationship Type</Form.Label>
        {/* <Form.Control type="email" placeholder="Relationship Type" /> */}
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            let relationshipSelected = e.target.value;
            // console.log("in SelectRecipient: ", recipientSelected)
            setRelationshipType(relationshipSelected);
          }}
        >
          <option>Personal</option>
          <option>Professional</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhoneNum">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder={phone}
          onChange={(e) => {
            let value = e.target.value;
            setPhone(value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your recipient's phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RecipientForm;
