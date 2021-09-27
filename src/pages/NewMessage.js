import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoadingButton from "../components/LoadingButton/LoadingButton";
import { useAuth } from "../contexts/AuthContext";
import { fetchRecipientsByUser } from "../api/recipientCalls";
import { sendNewMessage } from "../api/messageCalls";
import "./NewMessage.scss";

const NewMessage = () => {
  const { authToken, currentUser } = useAuth();
  const location = useLocation();
  const historyStateRecipient = location.state?.recipient;

  const [recipients, setRecipients] = useState();
  const [selectedRecipient, setSelectedRecipient] = useState();
  const [messageContent, setMessageContent] = useState();
  const [sendEmail, setSendEmail] = useState(false);
  const [sendSMS, setSendSMS] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipients = async () => {
      const data = await fetchRecipientsByUser(authToken);
      setRecipients(data);
    };
    if (historyStateRecipient) {
      setSelectedRecipient(historyStateRecipient.id);
    }
    if (authToken) {
      getRecipients();
    }
  }, [authToken, historyStateRecipient]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ selectedRecipient, messageContent, sendEmail, sendSMS });
    sendNewMessage(authToken, {
      content: messageContent,
      user: currentUser.id,
      recipient: selectedRecipient,
      send_email: false, // CHANGE THIS TO STATE VALUE TO SEND
      send_sms: false, // CHANGE THIS TO STATE VALUE TO SEND
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        // maybe redirect here
      });
  };

  return (
    <div className="message">
      <h1>Send an Appreciation Message</h1>
      <Form onSubmit={(e) => handleSendMessage(e)}>
        {/* Recipient Select */}
        <Form.Group className="mb-3">
          <Form.Label>Recipient</Form.Label>
          <Form.Select
            aria-label="Recipient select"
            value={selectedRecipient}
            onChange={(e) => setSelectedRecipient(e.currentTarget.value)}
          >
            <option>Select a message recipient</option>
            {recipients &&
              recipients.map((recipient) => (
                <option key={recipient.id} value={recipient.id}>
                  {recipient.first_name} {recipient.last_name}
                </option>
              ))}
          </Form.Select>
        </Form.Group>
        {/* Delivery Method */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Email"
            checked={sendEmail}
            onChange={(e) => setSendEmail(e.currentTarget.checked)}
          />
          <Form.Check
            type="checkbox"
            label="Text Message"
            checked={sendSMS}
            onChange={(e) => setSendSMS(e.currentTarget.checked)}
          />
        </Form.Group>
        {/* Message */}
        <Form.Group className="mb-3">
          <Form.Label>Write your Appreciation Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={messageContent}
            onChange={(e) => setMessageContent(e.currentTarget.value)}
          />
        </Form.Group>
        <LoadingButton
          variant="primary"
          type="submit"
          loading={loading}
          text="Send"
        />
      </Form>
    </div>
  );
};

export default NewMessage;
