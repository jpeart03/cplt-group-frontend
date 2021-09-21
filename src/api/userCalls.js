const fetchAllUsers = async (token)  =>{
  let options = {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`  
    },
    }
  try{
    console.log("FETCHALL ENTER TRY")
    let response = await fetch('http://127.0.0.1:8000/users/recipients', options)
    let data = await response.json()
    console.log("Response in fetchUsers: ", data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {fetchAllUsers}