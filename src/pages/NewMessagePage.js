import { useAuth } from "../contexts/AuthContext.js";
import { useState } from "react"
import { Form } from 'react-bootstrap'
import SelectRecipient from "../components/Messages/SelectRecipient.js";
import SelectDeliveryMethod from "../components/Messages/SelectDelivMethod.js";
import MessageTextBox from "../components/Messages/MessageTextBox.js";
import { sendNewMessage } from "../api/messageCalls.js"

const NewMessagePage = () => {
  const { authToken } = useAuth();
  const [content, setContentValue] = useState("default content");
  const [recipient, setRecipientValue] = useState();
  // const [deliveryMethod, SelectDeliveryMethod] = useState();

  
  
  const handleSubmit = (e, authToken) => {
    let recipientParsed = JSON.parse(recipient)
    let recipientID = recipientParsed.id 
    console.log("recipientID in handleSubmit", recipientID)
    let messageValues ={
      "content": content,
      "recipient": recipientID
      // "delivery_method": deliveryMethod,
    }
    console.log("###", messageValues)
    e.preventDefault()
    sendNewMessage(authToken, messageValues)

  }

  return (
    <div>
      <h5>Send an Appreciation Message</h5>
      <Form method="POST" onSubmit={(e) => {handleSubmit(e, authToken)}}>
        <SelectRecipient setRec={setRecipientValue}/>
        <SelectDeliveryMethod/>
        <MessageTextBox setContentValue={setContentValue}/>
        <input type="submit" value="Send"/>
      </Form>
      {/* Future Version: GetAPrompt*/}
      {/* Message section (textbox-- Future Version:  sentiment border, sentiment icon and text) */}

    </div>
  )

}

export default  NewMessagePage 
