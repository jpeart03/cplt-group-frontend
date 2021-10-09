import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { fetchRecipientsByUser } from "../api/recipientCalls";
import { sendNewMessage } from "../api/messageCalls";
import NewMessageForm from "../components/NewMessageForm/NewMessageForm";
import "./NewMessagePage.scss";

const NewMessagePage = () => {
  const { authToken, currentUser, refreshUser } = useAuth();
  const location = useLocation();
  const historyStateRecipient = location.state?.recipient;

  const [recipients, setRecipients] = useState();
  const [historyStateRecipientId, setHistoryStateRecipientId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipients = async () => {
      const data = await fetchRecipientsByUser(authToken);
      setRecipients(data);
    };
    if (historyStateRecipient) {
      setHistoryStateRecipientId(historyStateRecipient.id);
    }
    if (authToken) {
      getRecipients();
    }
  }, [authToken, historyStateRecipient, currentUser]);

  const handleSubmit = (recipientId, message, email, sms) => {
    setIsLoading(true);
    // Consider sending raw state data and building object in api file.
    sendNewMessage(authToken, {
      recipient: recipientId,
      content: message,
      send_email: false, // CHANGE THIS TO STATE VALUE TO SEND
      send_sms: false, // CHANGE THIS TO STATE VALUE TO SEND
      user: currentUser.id,
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        refreshUser()
        // maybe redirect here
      });
  };

  return (
    <div className="message">
      <h3>Send an Appreciation Message</h3>
      <NewMessageForm
        recipients={recipients}
        historyStateRecipientId={historyStateRecipientId}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NewMessagePage;
