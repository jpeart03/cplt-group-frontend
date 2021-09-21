import { Button } from 'react-bootstrap'

const MessageList = ({messages}) => {
  if (messages){
    return (
      <div>
        <h3>Your Messages: </h3>
        {messages.map( message => {
        return (
          <div>
            <p>To: {message.first_name} </p>
            <p>{message.content}</p>
          </div>
        )
      }
      )}
      <Button> Create a New Recipient</Button>
      </div>
    )
  }
  else {
    return(
      <div>
        <p>No Messages</p>
        <Button> Create a Recipient</Button>
      </div>
    )
  }
}

export {MessageList} 