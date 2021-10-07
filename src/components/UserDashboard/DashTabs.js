import {Tabs, Tab} from "react-bootstrap"
import { useState } from "react"
import NewMessagePage from "../../pages/NewMessagePage";
import EditMyAccountPage from "../../pages/EditMyAccountPage.js"
import RecipientsPage from "../../pages/RecipientsPage";
import "./DashTabs.scss"

const DashTabs = () => {
  const [key, setKey] = useState(null);

  return (
    <Tabs className="dash-tabs"
      // style={{borderBottom:"8px #20c997 solid"}}
      // id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => 
        {if(key === k){setKey(null)}
        else {setKey(k)}
        }
        
      }
      // className="mb-3"
    >
      <Tab eventKey="sendMessage" title="Send A Message" >
        <NewMessagePage />
      </Tab>
      <Tab eventKey="profile" title="Edit Profile">
        <EditMyAccountPage />
      </Tab>
      <Tab eventKey="recipients" title="Recipients" >
        <RecipientsPage />
      </Tab>
    </Tabs>
  );
}

export default DashTabs