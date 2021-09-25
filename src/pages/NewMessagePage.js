import { useAuth } from "../contexts/AuthContext.js";
import { useEffect, useState } from "react"
import { Form, Button } from 'react-bootstrap'
import SelectRecipient from "../components/Messages/SelectRecipient.js";
import SelectDeliveryMethod from "../components/Messages/SelectDelivMethod.js";
import MessageTextBox from "../components/Messages/MessageTextBox.js";
import { sendNewMessage } from "../api/messageCalls.js"

const NewMessagePage = (props) => {
  const { authToken, currentUser } = useAuth();
  const [content, setContentValue] = useState("default content");
  const [recipient, setRecipientValue] = useState();
  const [refreshRecCall, setRefreshRecCall] = useState(false);
  // const [deliveryMethod, SelectDeliveryMethod] = useState();
  
  useEffect( () => {
    if (props.location.recipientParamObj){
    let linkedRecipient = props.location.recipientParamObj
    setRecipientValue(linkedRecipient)
    }
    }, []
  )
  
  const handleSubmit = (e, authToken) => {
    let recipientParsed = JSON.parse(recipient)
    let recipientID = recipientParsed.id 
    let messageValues ={
      "content": content,
      "recipient": recipientID,
      "user": currentUser.pk,
      // "delivery_method": deliveryMethod,
    }
    e.preventDefault()
    sendNewMessage(authToken, messageValues)

  }

  return (
    <div>
      <h5>Send an Appreciation Message</h5>
      <Form onSubmit={(e) => {handleSubmit(e, authToken)}}>
        <SelectRecipient refreshRecCall={refreshRecCall} passedRecipient={recipient} setRec={setRecipientValue}/>
        <SelectDeliveryMethod/>
        <MessageTextBox setContentValue={setContentValue}/>
        <Button type="submit">Send</Button>
      </Form>
      {/* Future Version: GetAPrompt*/}
      {/* Message section (textbox-- Future Version:  sentiment border, sentiment icon and text) */}

    </div>
  )

}

export default  NewMessagePage 
