

import { Card } from "react-bootstrap"
import AchievementCard from "./AchievementCard"
import "./TrophyCase.scss"
import plainBronzeTrophyImg from "./achievementImages/plain-trophy-01.svg"
import plainSilverTrophyImg from "./achievementImages/plain-trophy-02.svg"
import plainGoldTrophyImg from "./achievementImages/plain-trophy-03.svg"
import trophyObjsArray from "./trophyObjs"
import { useAuth } from "../../contexts/AuthContext"
import getTrophyBoolArray from "./getTrophyBoolArray"


// grid of achievement trophies
// View all available achievements -> modal
let userAchBoolArrayDUMMY = [true
  , false, true, false, true
]

// let trophyObjects=[
  //   { achImage: plainBronzeTrophyImg,
  //     achName : "First Achievement",
  //     achDesc : "The description for Bronze Plain Achievement ONE"
  //   },
  //   { achImage: plainSilverTrophyImg,
  //     achName : "Second Achievement",
  //     achDesc : "The description for Silver Plain Achievement TWO"
  //   },
  //   { achImage: plainGoldTrophyImg,
  //     achName : "Third Achievement",
  //     achDesc : "The description for Gold Plain Achievement THREE"
  //   },
  //   { achImage: plainSilverTrophyImg,
  //     achName : "Fourth Achievement",
  //     achDesc : "The description for Silver Plain Achievement FOUR"
  //   },
  //   { achImage: plainSilverTrophyImg,
  //     achName : "Fifth Achievement",
  //     achDesc : "The description for Silver Plain Achievement FIVE"
  //   },
  // ]
  
  let Trophies = () => {
    const { currentUser } = useAuth();
    let userAchBoolArray = getTrophyBoolArray(currentUser)


    return (
      userAchBoolArray.map((boolValue, index) => {
        if (boolValue){
          let xTrophy = trophyObjsArray[index]
          // let xImage= trophyObjects[index]["achImage"]
          let xImage = xTrophy.achImage
          let xName = xTrophy.achName
          let xDesc = xTrophy.achDesc
          console.log(xImage, xName, xDesc)
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