import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

import { fetchRecipientsByUser } from "../../api/recipientCalls";
import { fetchMessagesByUser } from "../../api/messageCalls"
const RecipientsList = () => {
  const [recipients, setRecipients] = useState();
  const { authToken } = useAuth();
  
  useEffect( () => {
    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken)
      setRecipients(userRecipients)
    }
    console.log("useEffect", authToken)
    getUserRecords()
  }, [authToken])

  if (recipients){
    return (
      <div>
        <h5>Your Recipients: </h5>
        {recipients.map( recipient => {
        return (
          <div>
            <p>{recipient.first_name} {recipient.last_name} <Button>Write {recipient.first_name} a new Message</Button></p>
          </div>
        )
      }
      )}
      <Button> Create a New Recipient</Button>
      </div>
    )
  }
  else {
    return(
      <div>
        <p>No Recipients</p>
        <Button> Create a Recipient</Button>
      </div>
    )
  }
}

export {RecipientsList} 