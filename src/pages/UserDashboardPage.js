// import { useState } from "react";
import ActionsSection from "../components/UserDashboard/ActionsSection";
import RecentMessagesList from "../components/UserDashboard/RecentMessageList";
import SignedInAs from "../components/UserDashboard/SignedInAs";
// import { useAuth } from "../contexts/AuthContext.js";
// import { fetchAllUsers } from "../api/userCalls.js";
// import { fetchRecipientsByUser } from "../api/recipientCalls";
// import { fetchMessagesByUser } from "../api/messageCalls";
import { RecipientsList } from "../components/Recipients/RecipientList";
// import { AllUsersList } from "../components/AllUsersList";
// import { UserMessages } from "../components/Messages/MessagetList.js"


const UserDashboardPage = () => {
  // const { authLoading, currentUser, login, logout, register, authToken} = useAuth();
  // const [allUsers, setAllUsers] = useState();
  // const [recipients, setRecipients] = useState();
  // const [messages, setMessages] = useState();

  // const getUserRecords = async (userID) => {
  //   let usersList = await fetchAllUsers()
  //   let userRecipients = await fetchRecipientsByUser(userID)
  //   let userMessages = await fetchMessagesByUser(userID)
  //   setAllUsers(usersList)
  //   setRecipients(userRecipients)
  //   setMessages(userMessages)
  // }


  // useEffect( () => {
  //   getUserRecords(userID)
  // }, [])

  


  return (
    <div style={{maxWidth:'75%',  margin:'auto'}}>
      <p>UserDashboardPage Placeholder</p>
      <SignedInAs/>
      <RecipientsList />
      <ActionsSection/>
      <RecentMessagesList/>
    </div>
  )
}

export default UserDashboardPage