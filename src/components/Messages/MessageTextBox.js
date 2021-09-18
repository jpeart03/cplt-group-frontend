import { Form } from 'react-bootstrap'

const MessageTextBox = () => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Write your Appreciation Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  )
}

export default MessageTextBox