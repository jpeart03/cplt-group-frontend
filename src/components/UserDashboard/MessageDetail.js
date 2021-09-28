import { Card } from 'react-bootstrap'
import { fetchRecipientByID } from '../../api/recipientCalls.js';
import { useState,  useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext.js";

const MessageDetail = ({messageObj}) => {
  const { authToken } = useAuth();

  const [recipientName, setRecipientName] = useState()
  const [recLastName, setRecLastName] = useState()
  const [deliveryContactInfo, setdeliveryContactInfo] = useState()

  let recipientID = messageObj.recipient

  const getRecipientInfo = async (recipientID, authToken) => {
    let x = await fetchRecipientByID(recipientID, authToken)
    setRecipientName(x.first_name)
    setRecLastName(x.last_name)
    setdeliveryContactInfo("(dummy info) 309-654-5555")
  }

  useEffect( () => {
    getRecipientInfo(recipientID, authToken)
  }, [recipientName, authToken])
  

  let date = messageObj.send_date
  let dateOnly = messageObj.send_date.split(' ')[0]
  let messageBody = messageObj.content

  return (
    <div>
      <Card style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"18%", marginLeft:"10%"}}><h6>{dateOnly}</h6></div>
        <div style={{width:"45%"}}>
          <h6>To: {recipientName} {recLastName}</h6>
          <h6>At: {deliveryContactInfo}</h6>
          <p>{messageBody}</p>
        </div>
  
      </Card>
    </div>
    )
}

export default MessageDetail