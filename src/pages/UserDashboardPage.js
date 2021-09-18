import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ActionsSection from "../components/UserDashboard/ActionsSection";
import RecentMessagesList from "../components/UserDashboard/RecentMessageList";
import SignedInAs from "../components/UserDashboard/SignedInAs";
import { useAuth } from "../contexts/AuthContext.js";


const UserDashboardPage = () => {
  // Add this when Jim has Context set up
  const { authLoading, currentUser, login, logout, register} = useAuth();


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