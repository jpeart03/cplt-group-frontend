import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { fetchMessagesByUser } from "../../api/messageCalls";
import {
  fetchRecipientByID,
  fetchRecipientsByIDs,
} from "../../api/recipientCalls";

const RecentRecipients = () => {
  const [recipientIDs, setRecipientIDs] = useState();
  // RECent RECipient Objects (truncated list)
  const [recRecObjs, setRecRecObjs] = useState();
  const { authToken, currentUser } = useAuth();

  const findRecentRecipients = async (messages) => {

    const unique = [...new Set(messages.map(item => item.recipient))]
    const slicedIDArray = unique.slice(0, 4)
    setRecipientIDs(slicedIDArray)
    
    // get the user objects by id

    let recentRecipientObjs = await fetchRecipientsByIDs(
      slicedIDArray,
      authToken
    );
    setRecRecObjs(recentRecipientObjs);
  };

  useEffect(() => {
    const getUserRecords = async () => {
      // get all messages
      let userMessArray = await fetchMessagesByUser(authToken);
      // sort by ID (most recent -highestID- first in the array)
      userMessArray.sort((a, b) => b.id - a.id);
      // get the recipient IDs in order (newest to oldest)without any duplicates
      await findRecentRecipients(userMessArray);
    };
    if (authToken) {
      getUserRecords();
    }
  }, [authToken, , currentUser]);

  if (recRecObjs) {
    return (
      <div style={{marginBottom:"3rem"}}>
        <h3>Recently Messaged Recipients: </h3>
        <ListGroup variant="flush">
          {recRecObjs.map((recipient) => {
            const newRecipientMessage = {
              pathname: "/newmessage",
              state: { recipient: recipient },
            };
            return (
              // <div style={{display:"flex",  alignItems:"center"}}>
              <ListGroup.Item
                key={recipient.id}
                style={{ display: "flex", alignItems: "center" }}
              >
                <h6 style={{ width: "20%" }}>
                  {recipient.first_name} {recipient.last_name}{" "}
                </h6>
                <Button
                  size="sm"
                  variant="primary"
                  as={Link}
                  to={newRecipientMessage}
                >
                  Write {recipient.first_name} a new Message
                </Button>
              </ListGroup.Item>
              // </div>
            );
          })}
        </ListGroup>
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

export { RecentRecipients };
