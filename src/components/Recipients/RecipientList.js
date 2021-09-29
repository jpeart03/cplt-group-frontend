import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { fetchRecipientsByUser } from "../../api/recipientCalls";

const RecipientsList = () => {
  const [recipients, setRecipients] = useState();
  const { authToken } = useAuth();

  useEffect(() => {
    const getUserRecords = async () => {
      let userRecipients = await fetchRecipientsByUser(authToken);
      setRecipients(userRecipients);
    };
    if (authToken) {
      getUserRecords();
    }
  }, [authToken]);

  if (recipients) {
    return (
      <div>
        <h5>Your Recipients: </h5>
        {recipients.map((recipient) => {
          const newRecipientMessage = {
            pathname: "/newmessage",
            state: { recipient: recipient },
          };
          return (
            <div>
              <p>
                {recipient.first_name} {recipient.last_name}{" "}
                <Button variant="info" as={Link} to={newRecipientMessage}>
                  Write {recipient.first_name} a new Message
                </Button>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>No Recipients</p>
        <Button> Create a Recipient</Button>
      </div>
    );
  }
};

export { RecipientsList };
