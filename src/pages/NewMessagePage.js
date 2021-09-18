import { useAuth } from "../contexts/AuthContext.js";
import { Form } from 'react-bootstrap'
import SelectRecipient from "../components/Messages/SelectRecipient.js";
import SelectDeliveryMethod from "../components/Messages/SelectDelivMethod.js";
import MessageTextBox from "../components/Messages/MessageTextBox.js";

const NewMessagePage = () => {
  // const { authLoading, currentUser, login, logout, register} = useAuth();

  return (
    <div>
      <h5>Send an Appreciation Message</h5>
      <Form method="POST">
        <SelectRecipient/>
        <SelectDeliveryMethod/>
        <MessageTextBox/>
        <input type="submit" value="Send"/>
      </Form>
      {/* Future Version: GetAPrompt*/}
      {/* Message section (textbox-- Future Version:  sentiment border, sentiment icon and text) */}

    </div>
  )

}

export default  NewMessagePage 
