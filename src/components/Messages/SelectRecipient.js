import {Form, } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { fetchRecipientsByUser } from "../../api/recipientCalls";

const SelectRecipient = ({setRec}) =>{
  // SELECT RECIPIENT USES THE currentUser to create a dropdown selection of that user's recipients
  // The value set by the dropdown is the recipient ID. 
  const [recipients, setRecipients] = useState();
  const [messageRecipient, setMessageRecipient]  = useState();
  const { authToken, currentUser } = useAuth();

  useEffect( () => {
    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken)
      setRecipients(userRecipients)
    }
    if(authToken){
      getUserRecords()
    }
  }, [authToken])
  
  // // Dummy Data
  // const mySampleRecs = [
  //   {'id':4, 
  //   'recname':"Martha",
  //   'email': "martha@email.com",
  //   'phone': 1235551234},
  //   {'id':7, 
  //   'recname':"Lolly",
  //   'email': "lolly@email.com",
  //   'phone': 4565551234},
  //   {'id':11, 
  //   'recname':"Tony",
  //   'email': "tony@email.com",
  //   'phone': 7895551234}
  // ]
  // const myRecipients = mySampleRecs
  // // END Dummy Data

  
  const makeDDVaues = () => {
    if(recipients){
      return (
          recipients.map((recipient, index) => {
            // console.log("inside map",  recipient.recname, recipient,)
            let jsonrec = JSON.stringify(recipient)
            return(
              <option key ={`recip-${index}`} value={jsonrec}>{recipient.first_name}</option>
            )
            
          })
      )
    }
    else {
      return(
        <option value={null}>You have no recipients... yet</option>
      )
    }
  }

  let menuItems = makeDDVaues();

  return (
    <div>
      <Form.Select aria-label="Default select example" 
          onChange={(e) => {
            let recipientSelected = e.target.value
            // console.log("in SelectRecipient: ", recipientSelected)
            setMessageRecipient(recipientSelected)
            setRec(recipientSelected)
            }}>
        <option>Select A Recipient</option>
        {menuItems}
      </Form.Select>
    </div>
  )
}

export default SelectRecipient;

