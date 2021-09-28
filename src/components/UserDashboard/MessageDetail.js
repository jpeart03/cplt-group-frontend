import { Card } from 'react-bootstrap'
import { fetchRecipientByID } from '../../api/recipientCalls.js';
import { useState,  useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext.js";

const MessageDetail = ({messageObj}) => {
  const { authToken } = useAuth();

  const [recipientName, setRecipientName] = useState()
  const [recLastName, setRecLastName] = useState()
  
  let recipientID = messageObj.recipient

  const getRecipientInfo = async (recipientID, authToken) => {
    let x = await fetchRecipientByID(recipientID, authToken)
    setRecipientName(x.first_name)
    setRecLastName(x.last_name)
  }

  useEffect( () => {
    getRecipientInfo(recipientID, authToken)
  }, [recipientName, authToken])
  

  let date = messageObj.send_date
  let messageBody = messageObj.content

  return (
    <div>
      <Card style={{display:"flex", flexDirection:"row", justifyContent:'space-around'}}>
        <div>{date}</div>
        <div>
          <p>To: {recipientName} {recLastName}</p>
          <p>{messageBody}</p>
        </div>
  
      </Card>
    </div>
    )
}

export default MessageDetail