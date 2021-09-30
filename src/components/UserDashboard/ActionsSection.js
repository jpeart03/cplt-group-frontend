import ViewEditRecipientsButton from "./ViewEditRecipients";
import SendMessageButton from "./SendAMessageButton";
import EditProfileButton from "./EditProfileButton";


const ActionsSection = () => {

  return (
    <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding:"10%", border:"green solid 1px", marginTop:"2em", marginBottom:"2em"}}> 
      <SendMessageButton style = {{margin: '1em'}}/>
      <EditProfileButton/>
      <ViewEditRecipientsButton/>
    </div>
  )
}

export default ActionsSection;