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
    // console.log("Response in fetchUsers: ", data)
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


const createNewRecipient = async(recipientValues, authToken) => {
  console.log("enterCreateNewRecipient function recipientValues: ", recipientValues, authToken)
  // console.log(recipientValues)
  let options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authToken}`
    },
    body: JSON.stringify(recipientValues)}
    
  try{
    let response = await fetch(`http://127.0.0.1:8000/users/recipients/`, options)
    let data = await response.json()
    // console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const editRecipient = async(recipientValues, authToken) => {
        console.log("enter editRecipient function recipientValues: ", recipientValues, authToken)
        let recID = recipientValues.id
  console.log("recValues id= ", recID)
  let options = {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authToken}`
    },
    body: JSON.stringify(recipientValues)}
    
  try{
    console.log(recID, options, "IN THE editRecipient call")
    let response = await fetch(`http://127.0.0.1:8000/users/recipients/${recID}/`, options)
    let data = await response.json()
    // console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}
      
      export {  fetchRecipientsByUser, 
                fetchRecipientByID,
                createNewRecipient,
                editRecipient 
            }
