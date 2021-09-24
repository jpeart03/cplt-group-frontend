import { fetchAllUsers } from '../api/userCalls.js'


const AllUsersList = ({allUsers}) => {
  if (allUsers){
    return (
      <div>
        <p>ALL USERS:</p>
        {allUsers.map( user => {
        return (
          <div>
            {user.id}: {user.first_name}
          </div>
        )
      }
      )}
      </div>
    )
  }
  else {
    return(
      <p>LOADING...</p>
    )
  }
}

export { AllUsersList }