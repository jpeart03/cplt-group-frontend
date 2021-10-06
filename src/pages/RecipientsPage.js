import { Accordion } from "react-bootstrap";
import { useEffect, useState } from "react";
import RecipientForm from "../components/Recipients/RecipientForm";
import SelectRecipient from "../components/Recipients/SelectRecipient";
import { useAuth } from "../contexts/AuthContext";
import { fetchRecipientsByUser, deleteRecipient } from "../api/recipientCalls";

const RecipientsPage = () => {
  const [selectedRecipient, setSelectedRecipient] = useState(0);
  const [recipients, setRecipients] = useState();
  const { authToken } = useAuth();

  const getRecipients = async () => {
    let userRecipients = await fetchRecipientsByUser(authToken);
    setRecipients(userRecipients);
  };

  useEffect(() => {
    if (authToken) {
      getRecipients();
    }
  }, [authToken]);

  const handleSelectRecipient = (event) => {
    let selectedRecipientId = parseInt(event.target.value);
    let foundRecipient = recipients.find(
      (recipient) => recipient.id === selectedRecipientId
    );
    let formattedRecipient = foundRecipient
      ? {
          id: foundRecipient.id,
          email: foundRecipient.email,
          phone: foundRecipient.phone,
          firstName: foundRecipient.first_name,
          lastName: foundRecipient.last_name,
          relationshipType: foundRecipient.relationship_type,
        }
      : null;

    setSelectedRecipient(formattedRecipient);
  };

  const refreshRecipients = () => {
    getRecipients();
  };

  const handleDeleteRecipient = async () => {
    await deleteRecipient(selectedRecipient.id, authToken);
    setSelectedRecipient(0);
    refreshRecipients();
  };

  return (
    <div>
      <h3 style={{marginTop:"2rem"}}>Recipients</h3>
      {/* <Accordion defaultActiveKey="0"> */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create a new recipient</Accordion.Header>
          <Accordion.Body>
            <RecipientForm onRefresh={refreshRecipients} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Edit a recipient</Accordion.Header>
          <Accordion.Body>
            <SelectRecipient
              recipients={recipients}
              handleSelect={handleSelectRecipient}
            />
            {!!selectedRecipient && (
              <RecipientForm
                recipient={selectedRecipient}
                onDeleteRecipient={handleDeleteRecipient}
                onRefresh={refreshRecipients}
              />
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default RecipientsPage;
