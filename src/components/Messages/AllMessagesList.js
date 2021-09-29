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
      // sort the message array by date (not including time):
      // messageArray.sort((a,b) => Date.parse(b.send_date.split(' ')[0]) - Date.parse(a.send_date.split(' ')[0]))

      // Sort message Array by ID, decending
      messageArray.sort((a,b) => b.id - a.id)
    

      return messageArray.map((message, index) => {
        return (
            <MessageDetail key={`recent-mess-${index}`} messageObj={message}/>
          )})
        }
    else return null
  }

  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>

      < Messages />
    </div>

  )
}

export { AllMessagesList }
