import { Card } from "react-bootstrap"

// image
// headline
// description

const AchievementCard = () => {
  return (
    <>
    {/* <img src="./achievementImages/plain-trophy-01.svg"/> */}
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src="./achievementImages/plain-trophy-01.svg" />
        {/* Image */}
        <Card.Title>Achievement Name and Level</Card.Title>
        <Card.Text>Acheivement Description</Card.Text>
      </Card>
    </>
  )
}

export default AchievementCard;