import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { fetchRecipientsByUser } from "../../api/recipientCalls";
import { fetchMessagesByUser } from "../../api/messageCalls";
import { useAuth } from '../../contexts/AuthContext';

const UserRecipients = () => {
  const [recipients, setRecipients] = useState();
  // const {authToken, currentUser} = useAuth();

  let authToken = 'Token 797a86821008410ca65c556f43de38ef7233514b'
  
  
  const getUserRecords = async (authToken) => {
    let userRecipients = await fetchRecipientsByUser(authToken)
    setRecipients(userRecipients)
  }

  useEffect( () => {
    getUserRecords(authToken)
  }, [])

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

export {UserRecipients} 