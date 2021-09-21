import { Card } from 'react-bootstrap'
import { fetchRecipientByID } from '../../api/recipientCalls.js';
import { useState,  useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext.js";

const RecentMessageDetail = ({messageObj}) => {
// const {authToken, currentUser} = useAuth();
  
  // dummy token
  let authToken = 'Token 797a86821008410ca65c556f43de38ef7233514b'

  const [recipientName, setRecipientName] = useState()
  const [recLastName, setRecLastName] = useState()


  // const date = "May 14, 2021"
  // const MessageBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies est laoreet, auctor ex id, tristique velit."
  // const recipientName = "Recipient NamePlaceholder"
  
  let recipientID = messageObj.recipient

  const getRecipientInfo = async (recipientID, authToken) => {
    let x = await fetchRecipientByID(recipientID, authToken)
    setRecipientName(x.first_name)
    setRecLastName(x.last_name)
  }

  useEffect( () => {
    getRecipientInfo(recipientID, authToken)
  }, [recipientName])
  

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

export default RecentMessageDetail