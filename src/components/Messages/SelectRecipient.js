import {Form, } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext";

const SelectRecipient = (props) =>{
  // SELECT RECIPIENT USES THE currentUser to create a dropdown selection of that user's recipients
  // The value set by the dropdown is the recipient ID. 

  const { authLoading, currentUser, login, logout, register} = useAuth();
  
  // list of current user's recipients
  // const myRecipients = currentUser.recipients 
  

  // Dummy Data
  const mySampleRecs = [
    {'id':4, 
    'recname':"Martha",
    'email': "martha@email.com",
    'phone': 1235551234},
    {'id':7, 
    'recname':"Lolly",
    'email': "lolly@email.com",
    'phone': 4565551234},
    {'id':11, 
    'recname':"Tony",
    'email': "tony@email.com",
    'phone': 7895551234}
  ]
  const myRecipients = mySampleRecs
  // END Dummy Data

  
  const makeDDVaues = () => {
    return (
        myRecipients.map((recipient, index) => {
          // console.log("inside map",  recipient.recname, recipient,)
          let jsonrec = JSON.stringify(recipient)
          return(
            <option key ={`recip-${index}`} value={jsonrec}>{recipient.recname}</option>
          )
          
        })
    )
  }

  let menuItems = makeDDVaues();

  return (
    <div>
      <Form.Select aria-label="Default select example" 
          onChange={(e) => {
            let recipientSelected = e.target.value
            console.log("in SelectRecipient: ", recipientSelected)
            props.setRec(recipientSelected)
            }}>
        <option>Select A Recipient</option>
        {menuItems}
      </Form.Select>
    </div>
  )
}

export default SelectRecipient;

