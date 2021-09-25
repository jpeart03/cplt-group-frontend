import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
    if(authToken){
      getUserRecords()
    }
  }, [authToken])

  if (recipients){
    return (
      <div>
        <h5>Your Recipients: </h5>
        {recipients.map( recipient => {
          const newTo = {
            pathname: "/newmessage", 
            recipientParamObj: recipient 
          }
        return (
          <div>
            <p>{recipient.first_name} {recipient.last_name} <Button variant="info"><Link to={newTo}>Write {recipient.first_name} a new Message</Link></Button></p>
          </div>
        )
      }
      )}
      <Button variant="info"><Link to="/recipients"> Edit/Create Recipient</Link></Button>
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