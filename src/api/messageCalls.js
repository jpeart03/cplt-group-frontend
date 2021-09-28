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

export { fetchMessagesByUser, sendNewMessage };
