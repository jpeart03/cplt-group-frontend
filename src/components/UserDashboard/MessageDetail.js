import { Card } from "react-bootstrap";
import { fetchRecipientByID } from "../../api/recipientCalls.js";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext.js";

const MessageDetail = ({ messageObj }) => {
  const { authToken } = useAuth();

  const [recipientName, setRecipientName] = useState();
  const [recLastName, setRecLastName] = useState();
  const [deliveryContactInfo, setdeliveryContactInfo] = useState();

  let recipientID = messageObj.recipient;

  const getRecipientInfo = async (recipientID, authToken) => {
    let x = await fetchRecipientByID(recipientID, authToken);
    setRecipientName(x.first_name);
    setRecLastName(x.last_name);
  };

  useEffect(() => {
    getRecipientInfo(recipientID, authToken);
  }, [recipientName, authToken]);

  let date = messageObj.send_date;
  let dateOnly = messageObj.send_date.split(" ")[0];
  let messageBody = messageObj.content;

  const ContactInfo = () => {
    if (messageObj.send_email && messageObj.send_sms) {
      return (
        <>
          <h6>
            At: {messageObj.sent_to_email} and {messageObj.sent_to_email}
          </h6>
        </>
      );
    } else if (messageObj.send_email) {
      return <h6>At: {messageObj.sent_to_email}</h6>;
    } else if (messageObj.send_sms) {
      return <h6>At: {messageObj.sent_to_phone}</h6>;
    } else return null;
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "2em",
      }}
    >
      <div style={{ width: "18%", marginLeft: "10%" }}>
        <h6>{dateOnly}</h6>
      </div>
      <div style={{ width: "45%" }}>
        <h6>
          To: {recipientName} {recLastName}
        </h6>
        <ContactInfo />
        <p>{messageBody}</p>
      </div>
    </Card>
  );
};

export default MessageDetail;
