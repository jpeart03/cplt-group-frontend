// import { useState } from "react";
import ActionsSection from "../components/UserDashboard/ActionsSection";
import RecentMessagesList from "../components/UserDashboard/RecentMessageList";
import SignedInAs from "../components/UserDashboard/SignedInAs";
import { useAuth } from "../contexts/AuthContext.js";
import { fetchRecipientsByUser } from "../api/recipientCalls";
import { fetchMessagesByUser } from "../api/messageCalls";
import { RecipientsList } from "../components/Recipients/RecipientList";
import { RecentRecipients } from "../components/Recipients/RecentRecipients.js";
import { UserMessages } from "../components/Messages/AllMessagesList.js";
import TrophyCase from "../components/Achievements/TrophyCase";
import MessagesByDayChart from "../components/MessagesByDayChart/MessagesByDayChart.js";
import DashTabs from "../components/UserDashboard/DashTabs";

const UserDashboardPage = () => {
  return (
    <div style={{ maxWidth: "75%", margin: "0 auto 200px auto" }}>
      <SignedInAs />
      <RecentRecipients />
      <DashTabs />
      {/* <ActionsSection/> */}
      <RecentMessagesList />
      <TrophyCase />
      <MessagesByDayChart />
    </div>
  );
};

export default UserDashboardPage;
