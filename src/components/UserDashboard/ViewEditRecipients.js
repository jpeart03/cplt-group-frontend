import {Button } from "react-bootstrap"
import {Link} from "react-router-dom"


const ViewEditRecipientsButton = () => {
  const handleViewEditRecipients = (e) => {
    e.preventDefault()
    console.log("ViewEditRecipients BUTTON CLICKED")
  }

  return (
    <div>
      <Button variant="success" as={Link} to={'/recipients'} >View/Edit Recipients</Button>
    </div>
  )
}

export default ViewEditRecipientsButton