import { Card } from 'react-bootstrap'


const RecentMessageDetail = () => {


  
  const date = "May 14, 2021"
  const messageBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies est laoreet, auctor ex id, tristique velit."
  const recipientName = "Recipient NamePlaceholder"

  return (
    <div>
      <Card style={{display:"flex", flexDirection:"row", justifyContent:'space-around'}}>
        <div>{date}</div>
        <div>
          <p>To: {recipientName}</p>
          <p>{messageBody}</p>
        </div>
  
      </Card>
    </div>
    )
}

export default RecentMessageDetail