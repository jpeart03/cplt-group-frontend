import { Card } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext.js";

const RecentMessageDetail = () => {

  const { authLoading, currentUser, login, logout, register} = useAuth();
  
  const date = "May 14, 2021"
  const MessageBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies est laoreet, auctor ex id, tristique velit."
  const recipientName = "Recipient NamePlaceholder"

  return (
    <div>
      <Card style={{display:"flex", flexDirection:"row", justifyContent:'space-around'}}>
        <div>{date}</div>
        <div>
          <p>To: {recipientName}</p>
          <p>{MessageBody}</p>
        </div>
  
      </Card>
    </div>
    )
}

export default RecentMessageDetail