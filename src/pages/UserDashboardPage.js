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
import { Col, Row } from "react-bootstrap";
import TrophyCase from "../components/Achievements/TrophyCase";
import RecipientChart from "../components/RecipientChart/RecipientChart";
import MessagesByDayChart from "../components/MessagesByDayChart/MessagesByDayChart.js";
import DashTabs from "../components/UserDashboard/DashTabs";
import "./UserDashboardPage.scss";

const UserDashboardPage = () => {
  return (
    <>
      <Row className="my-5">
        <Col lg="12">
          <SignedInAs />
        </Col>
      </Row>
      <Row className="my-5 dashboard-card">
        <Col lg="6">
          <MessagesByDayChart />
        </Col>
        <Col lg="6">
          <RecipientChart />
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg="8" className="px-0 me-2">
          <DashTabs />
        </Col>
        <Col className="col-recipients">
          <RecentRecipients />
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg="12">
          <RecentMessagesList />
        </Col>
      </Row>
      <Row style={{ marginBottom: "10rem" }}>
        <Col lg="12">
          <TrophyCase />
        </Col>
      </Row>
    </>
  );
};

export default UserDashboardPage;
