const apiUrl = process.env.REACT_APP_API_URL;

const fetchRecipientsByUser = async (token)  =>{
  console.log("fetchRecByUser")
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    }
  try{
    let response = await fetch(`${apiUrl}/users/recipients`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const fetchRecipientByID = async (recipientID, token)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    }
  try{
    let response = await fetch(`${apiUrl}/users/recipients/${recipientID}/`, options)
    let data = await response.json()
    return data
  } catch (error) {
    console.log("fetchRecbyIDerror:", error)
  }
}

export {
  fetchRecipientsByUser, 
  fetchRecipientByID
}