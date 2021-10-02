import { useState } from "react";
import { Tabs, Tab, Fade } from "react-bootstrap";
import { useMediaQuery } from "../../hooks/AppHooks";

const ActionTabs = () => {
  const [key, setKey] = useState("msg");
  const [height, width] = useMediaQuery();
  return (
    <Tabs
      id="dashboard-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="msg" title="Send a Message">
        <Fade in={key === "msg"}>
          <p style={{ height: "20rem" }}>Send a message form here...</p>
        </Fade>
      </Tab>
      <Tab eventKey="rec" title="Create/Edit Recipients">
        <Fade in={key === "rec"}>
          <p style={{ height: "25rem" }}>Recipients form here...</p>
        </Fade>
      </Tab>
      <Tab eventKey="pro" title="Edit Profile">
        <Fade in={key === "pro"}>
          <p style={{ height: "10rem" }}>Profile form here...</p>
        </Fade>
      </Tab>
    </Tabs>
  );
};

export default ActionTabs;
