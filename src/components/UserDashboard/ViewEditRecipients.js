import {Button } from "react-bootstrap"
import {Link} from "react-router-dom"


const ViewEditRecipientsButton = () => {
  const handleViewEditRecipients = (e) => {
    e.preventDefault()
    console.log("ViewEditRecipients BUTTON CLICKED")
  }

  return (
    <div>
      <Button variant="info"><Link to={'/recipients'} >View/Edit Recipients</Link></Button>
    </div>
  )
}

export default ViewEditRecipientsButton