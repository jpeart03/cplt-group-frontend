import RecentMessageDetail from "./RecentMessageDetail";
import { useState, useEffect } from 'react'
import { fetchMessagesByUser } from "../../api/messageCalls";
import { useAuth } from "../../contexts/AuthContext.js"

const RecentMessagesList = () => {
  const [messageArray, setMessageArray] = useState();
  const { authToken } = useAuth();
  console.log("RECENT MESSAGES AUTHTOKEN", authToken)
  
  // dummy token
  // let authToken = 'Token 797a86821008410ca65c556f43de38ef7233514b'

  
  useEffect( () => {
    const getUserRecords = async ( authToken ) => {
      let userRecipients = await fetchMessagesByUser(authToken)
      setMessageArray(userRecipients)
    }
    getUserRecords(authToken)
  }, [authToken])

  const Messages = () => {
    if (messageArray){
      // sort the array (untested):
            // messageArray.sort(function(a,b){
            //   var c = new Date(a.date);
            //   var d = new Date(b.date);
            //   return c-d;
            //   });

      // truncate the array to the most recent 4 messages
      const slicedArray = messageArray.slice(0, 4)
      return slicedArray.map((message, index) => {
        return (
            <RecentMessageDetail key={`recent-mess-${index}`} messageObj={message}/>
          )})
        }
    else return null
  }

  return(
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
      <h4>Recent Messages</h4>
      <Messages />
    </div>

  )
}

export default RecentMessagesList