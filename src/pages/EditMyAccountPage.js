import { useAuth } from "../contexts/AuthContext.js";
import { useEffect, useState } from "react"
import { Form } from 'react-bootstrap'
import { Accordion } from "react-bootstrap"
import  EditProfileForm  from "../components/UserDashboard/EditProfile"


const EditMyAccountPage = () => {
  const { authToken, currentUser } = useAuth()
  const [refreshUserCall, setrefreshUserCall] = useState(false);



  const resetUserDropDown = () => {
    document.getElementById("select-recipient-dropdown").selectedIndex = "0";
  }


  return (
    <div>
      <h5>Edit Profile</h5>
      {/* REVEAL:: New Recipient Form */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Profile</Accordion.Header>
          <Accordion.Body>
            <EditProfileForm 
            props={currentUser}
            resetUserDropDown={resetUserDropDown}
            refreshUserCall= {refreshUserCall}
            setrefreshUserCall={setrefreshUserCall}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default EditMyAccountPage