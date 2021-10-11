import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { fetchMessagesByUser } from '../../api/messageCalls'
import { Link } from 'react-router-dom'
import MessageDetail from '../UserDashboard/MessageDetail'


const AllMessagesList = ({messages}) => {
  const [messageArray, setMessageArray] = useState();
  const { authToken } = useAuth();

  useEffect( () => {
    const getUserRecords = async ( authToken ) => {
      let userRecipients = await fetchMessagesByUser(authToken)

      setMessageArray(userRecipients)
    }
    if(authToken){
      getUserRecords(authToken)
    }

  }, [authToken])


  const Messages = () => {
    if (messageArray){
      if (messageArray.length === 0){
        return <h6>No Messages to Display</h6>
      } else {
      // Sort message Array by ID, decending
      messageArray.sort((a,b) => b.id - a.id)
    

      return messageArray.map((message, index) => {
        return (
            <MessageDetail key={`recent-mess-${index}`} messageObj={message}/>
          )})
        }
        }
    else return <h6>Loading...</h6>
  }

  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>

      < Messages />
    </div>

  )
}

export { AllMessagesList }
