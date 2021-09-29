import MessageDetail from "./MessageDetail";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchMessagesByUser } from "../../api/messageCalls";
import { useAuth } from "../../contexts/AuthContext.js"

const RecentMessagesList = () => {
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
      // messageArray.sort((a,b) =>  
      //   Date.parse(b.send_date.split(' ')[0]) - Date.parse(a.send_date.split(' ')[0])
      // )

      // Sort message Array by ID, decending
      messageArray.sort((a,b) => b.id - a.id)

      // truncate the array to the most recent 4 messages
      const slicedArray = messageArray.slice(0, 4)
      return slicedArray.map((message, index) => {
        return (
            <MessageDetail key={`recent-mess-${index}`} messageObj={message}/>
          )})
        }
    else return null
  }

  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
      <Button as={Link} to={'/allmessages'}>View All Messages</Button>
      <h4>Recent Messages</h4>
      <Messages />
    </div>

  )
}

export default RecentMessagesList