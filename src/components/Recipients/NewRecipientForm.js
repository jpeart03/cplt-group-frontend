import { Form, Button } from "react-bootstrap"

const NewRecipientForm = () => {



  return (
    <Form>
      <Form.Group className="mb-3" controlId="formRecipientName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Recipient's Name" />
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

export default NewRecipientForm