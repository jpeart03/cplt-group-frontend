

import { Card } from "react-bootstrap"
import AchievementCard from "./AchievementCard"
import "./TrophyCase.scss"
import plainBronzeTrophyImg from "./achievementImages/plain-trophy-01.svg"
import plainSilverTrophyImg from "./achievementImages/plain-trophy-02.svg"
import plainGoldTrophyImg from "./achievementImages/plain-trophy-03.svg"
import shortSweetShortImg from "./achievementImages/short-sweet-short-06.svg"
import blueTrophy from "./achievementImages/blue-trophy-05.svg"

import darkblueTrophy from "./achievementImages/dark-blue-trophy.svg"
import trophyObjsArray from "./trophyObjs"
import { useAuth } from "../../contexts/AuthContext"
import getTrophyBoolArray from "./getTrophyBoolArray"


// grid of achievement trophies
// View all available achievements -> modal
  
  let Trophies = () => {
    const { currentUser } = useAuth();
    // let userAchBoolArray = getTrophyBoolArray(currentUser)

    // dummy bool array
    let userAchBoolArray = [
      true, false, true, false, true,
      true, true, true, false, true,
      true, false, true, false, true,
      true, false, true, false, true
    ]

    return (
      userAchBoolArray.map((boolValue, index) => {
        if (boolValue){
          let xTrophy = trophyObjsArray[index]
          // let xImage= trophyObjects[index]["achImage"]
          let xImage = xTrophy.achImage
          let xName = xTrophy.achName
          let xDesc = xTrophy.achDesc
          return (
            <AchievementCard achImage={xImage} achName={xName} achDesc={xDesc}/>
            )
          }
          else return null
        }
        )
        )
        
      }
      
  const UserAchievements = (userAchBoolArray) => {
        return (
          <>
    <h4 className="trophy-case-headline">Trophy Case</h4>
      <div className="trophy-grid">
        {/* return the user's acheivment cards in a grid */}
        {/* <AchievementCard achImage={plainBronzeTrophyImg} achBool="True" achName="First Achievemenat" achDesc="This is the descripitona of the first Achievement"/> */}
        <Trophies/>
      </div>
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