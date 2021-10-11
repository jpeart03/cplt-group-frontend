import MessageDetail from "./MessageDetail";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMessagesByUser } from "../../api/messageCalls";
import { useAuth } from "../../contexts/AuthContext.js";

const RecentMessagesList = () => {
  const [messageArray, setMessageArray] = useState();
  const { authToken, currentUser } = useAuth();

  useEffect(() => {
    const getUserRecords = async (authToken) => {
      let userMessArray = await fetchMessagesByUser(authToken);

      setMessageArray(userMessArray);
    };
    if (authToken) {
      getUserRecords(authToken);
    }
  }, [authToken, currentUser]);

  const Messages = () => {
    if (messageArray) {
      if (messageArray.length === 0) {
        return <h6>No Messages to Display</h6>;
      } else {
        // Sort message Array by ID, decending
        messageArray.sort((a, b) => b.id - a.id);

        // truncate the array to the most recent 4 messages
        const slicedArray = messageArray.slice(0, 4);
        return slicedArray.map((message, index) => {
          return (
            <MessageDetail key={`recent-mess-${index}`} messageObj={message} />
          );
        });
      }
    } else {
      return <h6>Loading ...</h6>;
    }
  };

  return (
    <div>
      <h3 style={{ display: "inline-block" }} className="mb-4">
        Recent Messages
      </h3>
      <Button as={Link} to={"/allmessages"} variant="link" className="">
        View All Messages
      </Button>
      <Messages />
    </div>
  );
};

export default RecentMessagesList;
