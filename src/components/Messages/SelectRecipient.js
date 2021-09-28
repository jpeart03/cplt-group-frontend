import {Form, } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { fetchRecipientsByUser } from "../../api/recipientCalls";

const SelectRecipient = ({setRec, passedRecipient, refreshRecCall}) =>{
  // SELECT RECIPIENT USES THE currentUser to create a dropdown selection of that user's recipients
  // The value set by the dropdown is the recipient ID. 
  const [recipients, setRecipients] = useState();
  const [messageRecipient, setMessageRecipient]  = useState();
  const { authToken, currentUser } = useAuth();
  const [ selectDefaultValue, setSelectDefaultValue ] = useState();
  const [selectDefaultText, setSelectDefaultText ] = useState("Select A Recipient");

  useEffect( () => {

    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken)
      setRecipients(userRecipients)

        if(passedRecipient){
        let jsonRec = JSON.stringify(passedRecipient)
        setSelectDefaultValue(jsonRec)
        setSelectDefaultText(passedRecipient.first_name)
        setMessageRecipient(jsonRec)
      }

    }
    if(authToken){
      getUserRecords()
    }
  }, [authToken, refreshRecCall, passedRecipient])


  const makeDDVaues = () => {
    if(recipients){
      return (
          recipients.map((recipient, index) => {
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
      <Form.Select id="select-recipient-dropdown" aria-label="Default select example" 
          onChange={(e) => {
            let recipientSelected = e.target.value
            setMessageRecipient(recipientSelected)
            setRec(recipientSelected)
            }}>
        <option  value={selectDefaultValue}>{selectDefaultText}</option>
        {menuItems}
      </Form.Select>
    </div>
  )
}

export default SelectRecipient;

