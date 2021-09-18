import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ActionsSection from "../components/UserDashboard/ActionsSection";
import RecentMessagesList from "../components/UserDashboard/RecentMessageList";
import SignedInAs from "../components/UserDashboard/SignedInAs";


const UserDashboardPage = () => {
  // Add this when Jim has Context set up
  // const contextInfo = useAuthContext();

  return (
    <div style={{maxWidth:'75%',  margin:'auto'}}>
      <p>UserDashboardPage Placeholder</p>
      <SignedInAs/>
      <ActionsSection/>
      <RecentMessagesList/>
    </div>
  )
}

export default UserDashboardPage