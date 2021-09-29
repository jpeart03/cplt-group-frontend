import {Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const SendMessageButton = () => {
  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log("SEND MESSAGE BUTTON CLICKED")
  }

  return (
    <div>
      <Button variant="success" as={Link} to='/newmessage' >Send A Message</Button>
    </div>
  )
}

export default SendMessageButton;