import { fetchRecipientsByUser } from "./recipientCalls";

const apiUrl = process.env.REACT_APP_API_URL;

const fetchMessagesByUser = async (token) => {
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    let response = await fetch(`${apiUrl}/users/messages/`, options);
    let data = await response.json();
    // console.log("Response in fetchUsers: ", data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

const sendNewMessage = async (token, messageValues) => {
  // console.log(messageValues)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(messageValues),
  };

  try {
    console.log(options.body);
    let response = await fetch(`${apiUrl}/users/messages/`, options);
    let data = await response.json();
    console.log(data);
    
    return data;
  } catch (error) {
    console.log(error);
  }
};


const messagesPerRecipient = async (authToken) => {
  let messages = await fetchMessagesByUser(authToken)
  let recipients = await fetchRecipientsByUser(authToken)

  const getRecipientName = (recipientArray) => {
    let userArray = []
    for (var u = 0; u <= recipientArray.length - 1; u++) {
      userArray.push([recipientArray[u].id, recipientArray[u].first_name])
    }
    return userArray
  }
  
  const getRecipientMsgCount = (messages) => {
    let userMsgCount = []
    for (var u = 0; u <= messages.length - 1; u++) {
      if (messages[u].recipient in userMsgCount) {
        userMsgCount[messages[u].recipient] += 1 
      } else {
        userMsgCount[messages[u].recipient] = 1
      }
    }
    return userMsgCount;
  }

  const getCountByName = (messages, recipients) => {
    const idMsgCount = getRecipientMsgCount(messages)
    const messagedRecipients = getRecipientName(recipients)
    const dataArray = []

    for (var u = 0; u <= messagedRecipients.length - 1; u++) {
      dataArray.push({recipient: messagedRecipients[u][1], count: idMsgCount[messagedRecipients[u][0]] })
    }
    return dataArray
  }

  return (
    getCountByName(messages, recipients)
  )
}

export { fetchMessagesByUser, sendNewMessage, messagesPerRecipient};
