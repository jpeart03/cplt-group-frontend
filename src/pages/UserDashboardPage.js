// import { useState } from "react";
import ActionsSection from "../components/UserDashboard/ActionsSection";
import RecentMessagesList from "../components/UserDashboard/RecentMessageList";
import SignedInAs from "../components/UserDashboard/SignedInAs";
import { useAuth } from "../contexts/AuthContext.js";
import { fetchRecipientsByUser } from "../api/recipientCalls";
import { fetchMessagesByUser } from "../api/messageCalls";
import { RecipientsList } from "../components/Recipients/RecipientList";
import { RecentRecipients } from "../components/Recipients/RecentRecipients.js"
import { UserMessages } from "../components/Messages/AllMessagesList.js"
import TrophyCase from "../components/Achievements/TrophyCase";
import RecipientChart from "../components/RecipientChart/RecipientChart";


const UserDashboardPage = () => {
  return (
    <div style={{maxWidth:'75%',  margin:'0 auto 200px auto'}}>
      <SignedInAs/>
      <RecentRecipients />
      <ActionsSection/>
      <RecentMessagesList/>
      <TrophyCase/>
      <RecipientChart />
    </div>
  );
};

export default UserDashboardPage;
