const apiUrl = process.env.REACT_APP_API_URL;

const deleteUser = async (token)  =>{
  let options = {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`  
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


export { 
  deleteUser,
}