import {Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const SendMessageButton = () => {
  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log("SEND MESSAGE BUTTON CLICKED")
  }

  return (
    <div>
      <Button><Link to={'/newmessage'} style={{color:"white"}}>Send A Message</Link></Button>
    </div>
  )
}

export default SendMessageButton;