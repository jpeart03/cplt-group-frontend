

import { Card } from "react-bootstrap"
import AchievementCard from "./AchievementCard"
import "./TrophyCase.scss"
// grid of achievement trophies
// View all available achievements -> modal

const UserAchievements = () => {
  return (
    <>
      {/* return the user's acheivment cards in a grid */}
      <AchievementCard/>
      <AchievementCard/>
      <AchievementCard/>
    </>
  )
}

const TrophyCase = () => {
  return (
    <>
      <div className="trophy-case-box">
        <UserAchievements/>
      </div>
    </>
  )
}

export default TrophyCase