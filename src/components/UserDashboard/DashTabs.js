import { Tabs, Tab, Fade } from "react-bootstrap";
import { useState } from "react";
import NewMessagePage from "../../pages/NewMessagePage";
import EditMyAccountPage from "../../pages/EditMyAccountPage.js";
import RecipientsPage from "../../pages/RecipientsPage";
import "./DashTabs.scss";

const DashTabs = () => {
  const [key, setKey] = useState("sendMessage");

  return (
    <Tabs
      className="dash-tabs"
      defaultActiveKey="sendMessage"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="sendMessage" title="Send A Message">
        <NewMessagePage />
      </Tab>
      <Tab eventKey="profile" title="Edit Profile">
        <EditMyAccountPage />
      </Tab>
      <Tab eventKey="recipients" title="Recipients">
        <RecipientsPage />
      </Tab>
    </Tabs>
  );
};

export default DashTabs;
