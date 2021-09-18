const fetchAllUsersRecipients = async (userPK)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Token ${token}`  
    },
    }
  try{
    let response = await fetch(`http://127.0.0.1:8000/users/${userPK}/recipients`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

const fetchRecipientByPK = async (userPK, recipientPK)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Token ${token}`  
    },
    }
  try{
    let response = await fetch(`http://127.0.0.1:8000/users/${userPK}/recipients/${recipientPK}/`, options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {fetchAllUsersRecipients, 
        fetchRecipientByPK}