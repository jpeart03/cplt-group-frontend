import { Card } from "react-bootstrap"
import "./AchievementCard.scss"



// image
// headline
// description

const AchievementCard = ({achImage, achName, achDesc}) => {
    return (
      <>
      {/* <img src="./achievementImages/plain-trophy-01.svg"/> */}
        <Card style={{ }} className="one-card">
          <Card.Img variant="top" src={achImage} />
          {/* Image */}
          <Card.Title className="achievement-title">{achName}</Card.Title>
          <Card.Text className="achievement-desc">{achDesc}</Card.Text>
        </Card>
      </>
  )
}

export default AchievementCard;