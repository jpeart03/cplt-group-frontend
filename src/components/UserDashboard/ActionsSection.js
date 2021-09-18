import ViewEditRecipientsButton from "./ViewEditRecipients";
import SendMessageButton from "./SendAMessageButton";
import EditProfileButton from "./EditProfileButton";


const ActionsSection = () => {

  return (
    <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}> 
      <SendMessageButton style = {{margin: '1em'}}/>
      <EditProfileButton/>
      <ViewEditRecipientsButton/>
    </div>
  )
}

export default ActionsSection;