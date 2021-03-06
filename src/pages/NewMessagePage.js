import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { fetchRecipientsByUser } from "../api/recipientCalls";
import { sendNewMessage } from "../api/messageCalls";
import NewMessageForm from "../components/NewMessageForm/NewMessageForm";
import AppToast from "../components/AppToast/AppToast";
import { useToast } from "../hooks/AppHooks";
import "./NewMessagePage.scss";
import GeneratePrompt from "../components/Messages/GeneratePrompt.js";

const NewMessagePage = () => {
  const { authToken, currentUser, refreshUser, refreshUserData } = useAuth();
  const { toastMessages, handleToastShow, handleNewToast } = useToast();
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
      send_email: email,
      send_sms: sms,
      user: currentUser.id,
    })
      .then((msg) => {
        handleNewToast("Success", "Your message was sent.");
      })
      .catch((error) => {
        handleNewToast(
          "Failed",
          "Your message failed to send. Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
        refreshUser();
        console.log("REFRESHUSERDATA: ", refreshUserData);
        console.log("authToken:: ", authToken);
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
      <AppToast
        toastMessages={toastMessages}
        handleToastShow={handleToastShow}
      />
    </div>
  );
};

export default NewMessagePage;
