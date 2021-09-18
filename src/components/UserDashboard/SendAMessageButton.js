import {Button } from "react-bootstrap"


const SendMessageButton = () => {
  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log("SEND MESSAGE BUTTON CLICKED")
  }

  return (
    <div>
      <Button onClick={handleSendMessage}>Send A Message</Button>
    </div>
  )
}

export default SendMessageButton;