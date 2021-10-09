import MessageDetail from "./MessageDetail";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchMessagesByUser } from "../../api/messageCalls";
import { useAuth } from "../../contexts/AuthContext.js"

const RecentMessagesList = () => {
  const [messageArray, setMessageArray] = useState();
  const { authToken, currentUser } = useAuth();
  
  useEffect( () => {
    const getUserRecords = async ( authToken ) => {
      let userMessArray = await fetchMessagesByUser(authToken)

      setMessageArray(userMessArray)
    }
    if(authToken){
      getUserRecords(authToken)
    }

  }, [authToken, currentUser])

  const Messages = () => {
    if (messageArray){
      if (messageArray.length === 0){
        return <h6>No Messages to Display</h6>
      } else {
        // Sort message Array by ID, decending
        messageArray.sort((a,b) => b.id - a.id)
  
        // truncate the array to the most recent 4 messages
        const slicedArray = messageArray.slice(0, 4)
        return slicedArray.map((message, index) => {
          return (
              <MessageDetail key={`recent-mess-${index}`} messageObj={message}/>
            )})
      }
        }
    else {
      return <h6>Loading ...</h6>}
    
  }

  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', marginTop:"2rem", marginBottom:"2rem"}}>
      <div id="recent-messages-header" style={{display: 'flex', flexDirection: 'row', margin:'5% 0'}}>
      <h4>Recent Messages</h4><Button as={Link} to={'/allmessages'} style={{margin: '0 5%'}}>View All Messages</Button>
      </div>
      <Messages />
    </div>

  )
}

export default RecentMessagesList