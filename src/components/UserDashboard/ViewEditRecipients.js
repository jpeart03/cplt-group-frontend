import {Button } from "react-bootstrap"


const ViewEditRecipientsButton = () => {
  const handleViewEditRecipients = (e) => {
    e.preventDefault()
    console.log("ViewEditRecipients BUTTON CLICKED")
  }

  return (
    <div>
      <Button onClick={handleViewEditRecipients}>View/Edit Recipients</Button>
    </div>
  )
}

export default ViewEditRecipientsButton