import {Button } from "react-bootstrap"
import {Link} from "react-router-dom"


const ViewEditRecipientsButton = () => {
  const handleViewEditRecipients = (e) => {
    e.preventDefault()
    console.log("ViewEditRecipients BUTTON CLICKED")
  }

  return (
    <div>
      <Button><Link to={'/recipients'} style={{color:"white"}}>View/Edit Recipients</Link></Button>
    </div>
  )
}

export default ViewEditRecipientsButton