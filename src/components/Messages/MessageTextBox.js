import { useState } from 'react'
import { Form } from 'react-bootstrap'


const MessageTextBox = ({setContentValue}) => {
  const [content, setContent] = useState();

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Write your Appreciation Message</Form.Label>
      <Form.Control as="textarea" rows={3} onChange={(e) => {
      let messageText = e.target.value
      console.log("in MessageTextBox: ", messageText)
      setContent(messageText)
      setContentValue(messageText)
      }}/>
    </Form.Group>
  )
}

export default MessageTextBox