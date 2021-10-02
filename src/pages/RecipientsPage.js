import { Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import SelectRecipient from "../components/Messages/SelectRecipient";
import NewRecipientForm from "../components/Recipients/NewRecipientForm.js";
import EditRecipientForm from "../components/Recipients/EditRecipient";
import RecipientForm from "../components/Recipients/RecipientForm";
import { useAuth } from "../contexts/AuthContext";
import { fetchRecipientsByUser } from "../api/recipientCalls";

const RecipientsPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState();
  const [recEmail, setRecEmail] = useState();
  const [recipients, setRecipients] = useState();
  const { authToken, currentUser } = useAuth();
  const [refreshRecCall, setRefreshRecCall] = useState(false);

  useEffect(() => {
    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken);
      setRecipients(userRecipients);
    };
    // console.log("useEffect", authToken)
    if (authToken) {
      getUserRecords();
    }
  }, [authToken]);

  const resetRecDropDown = () => {
    document.getElementById("select-recipient-dropdown").selectedIndex = "0";
  };

  const RecipientInfo = () => {
    if (selectedRecipient) {
      let thisRec = JSON.parse(selectedRecipient);
      console.log("thisRec: ", thisRec);
      return (
        <div>
          <p>
            Name: {thisRec.first_name} {thisRec.last_name}
          </p>
          <p>Email: {thisRec.email}</p>
          <p>Phone: {thisRec.phone}</p>
          <p>Relationship Type: {thisRec.relationship_type}</p>
        </div>
      );
    } else return null;
  };

  return (
    <div>
      <h3>Recipients</h3>
      {/* REVEAL:: New Recipient Form */}
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create a New Recipient</Accordion.Header>
          <Accordion.Body>
            {/* <NewRecipientForm
              setRefreshRecCall={setRefreshRecCall}
              refreshRecCall={refreshRecCall}
            /> */}
            <RecipientForm />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Edit Recipients</Accordion.Header>
          <Accordion.Body>
            <RecipientInfo />
            <SelectRecipient
              setRec={setSelectedRecipient}
              refreshRecCall={refreshRecCall}
            />
            <EditRecipientForm
              selectedRecipient={selectedRecipient}
              resetRecDropDown={resetRecDropDown}
              setSelectedRecipient={setSelectedRecipient}
              refreshRecCall={refreshRecCall}
              setRefreshRecCall={setRefreshRecCall}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RecipientsPage;
