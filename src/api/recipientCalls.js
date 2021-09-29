const apiUrl = process.env.REACT_APP_API_URL;

const fetchRecipientsByUser = async (token)  =>{
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

const fetchRecipientsByIDs = async (idArray, token) => {
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    }
    
    try {
      let objArray = await Promise.all(
          idArray.map(async (recipientID) => {
            const response = await fetch(`${apiUrl}/users/recipients/${recipientID}/`, options)
            const data = await response.json()
            return data
          })
          )
          return objArray
        }catch (error) {
          console.log("fetchRecsbyIDserror:", error)
        }
  
//   let objArray = idArray.map(async recipientID => {
//     try{
//       let response = await fetch(`${apiUrl}/users/recipients/${recipientID}/`, options)
//       let data = await response.json()
//       console.log("fetchRecSbyidS data", data)
//       return data
//     } catch (error) {
//     console.log("fetchRecsbyIDserror:", error)
//   }
// })
//   console.log("objArray: ...... ", objArray)
  }

const createNewRecipient = async(recipientValues, authToken) => {
  console.log("enterCreateNewRecipient function recipientValues: ", recipientValues, authToken)
  let options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authToken}`
    },
    body: JSON.stringify(recipientValues)}
    
  try{
    let response = await fetch(`${apiUrl}/users/recipients/`, options)
    let data = await response.json()
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
    let response = await fetch(`${apiUrl}/users/recipients/${recID}/`, options)
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteRecipient = async (recipientID, authToken) => {
  let options = {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken
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
      
      export {  fetchRecipientsByUser, 
                fetchRecipientByID,
                fetchRecipientsByIDs,
                createNewRecipient,
                editRecipient,
                deleteRecipient,
            }
