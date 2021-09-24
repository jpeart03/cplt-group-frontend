const fetchRecipientsByUser = async (authToken)  =>{
  console.log("in fetchRecByUser, authToken : ", authToken)
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authToken}`  
    },
    }
  try{
    let response = await fetch(`http://127.0.0.1:8000/users/recipients`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const fetchRecipientByID = async (recipientID, authToken)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authToken}`  
    },
    }
  try{
    let response = await fetch(`http://127.0.0.1:8000/users/recipients/${recipientID}/`, options)
    let data = await response.json()
    return data
  } catch (error) {
    console.log("fetchRecbyIDerror:", error)
  }
}

export {fetchRecipientsByUser, 
        fetchRecipientByID}