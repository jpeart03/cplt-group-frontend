import { Accordion } from "react-bootstrap"
import { useEffect, useState } from "react"
import SelectRecipient from "../components/Messages/SelectRecipient"
import NewRecipientForm from "../components/Recipients/NewRecipientForm.js"
import EditRecipientForm from "../components/Recipients/EditRecipient"
import { useAuth } from '../contexts/AuthContext'
import { fetchRecipientsByUser } from "../api/recipientCalls";


const RecipientsPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState();
  const [recEmail, setRecEmail] = useState();
  const [recipients, setRecipients] = useState();
  const { authToken } = useAuth();
  
  useEffect( () => {
    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken)
      setRecipients(userRecipients)
    }
    console.log("useEffect", authToken)
    getUserRecords()
  }, [authToken])

  const RecipientInfo = () => {
    if (selectedRecipient) {
      let thisRec = JSON.parse(selectedRecipient)
      console.log("thisRec: ", thisRec)
      setRecEmail(thisRec.email)
      return (
        <div>
          <p>Name: {thisRec.recname}</p>
          <p>Email: {thisRec.email}</p>
          <p>Phone: {thisRec.phone}</p>
        </div>
      )
    }
    else return null
  }

  return (
    <div>
      <h3>Recipients</h3>
      {/* REVEAL:: New Recipient Form */}
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create a New Recipient</Accordion.Header>
          <Accordion.Body>
            <NewRecipientForm/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Edit Recipients</Accordion.Header>
          <Accordion.Body>
            <RecipientInfo/>
            <SelectRecipient setRec={setSelectedRecipient}/>
            <EditRecipientForm recEmail={recEmail} selectedRecipient={selectedRecipient}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default RecipientsPage