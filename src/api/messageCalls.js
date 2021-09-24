const apiUrl = process.env.REACT_APP_API_URL;
const storageKey = "userToken";

const fetchMessagesByUser = async (token)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem(storageKey)}` 
    },
    }
  try{
    let response = await fetch(`${apiUrl}/users/messages/`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const sendNewMessage = async(token, messageValues) => {
  
  console.log(messageValues)
  let options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem(storageKey)}`
    },
    body: JSON.stringify(messageValues)}
    
  try{
    let response = await fetch(`${apiUrl}/users/messages/`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}



export {
  fetchMessagesByUser,
  sendNewMessage
}