

import { Card } from "react-bootstrap"
import AchievementCard from "./AchievementCard"
import "./TrophyCase.scss"
import trophyObjsArray from "./trophyObjs"
import { useAuth } from "../../contexts/AuthContext"
import getTrophyBoolArray from "./getTrophyBoolArray"
import { useEffect, useState } from "react"


// grid of achievement trophies
// View all available achievements -> modal
  
  let Trophies = () => {
    const { currentUser } = useAuth();
    const[userAchBoolArray, setUserAchBoolArray] = useState();

    useEffect( () =>{
      setUserAchBoolArray(getTrophyBoolArray(currentUser))
    }, [currentUser])

    if (userAchBoolArray){
      console.log(currentUser)
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
    else return(<p>Loading...</p>)
        
      }
      
  const UserAchievements = () => {

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
  const { currentUser } = useAuth();
  if (currentUser){
    return (
      <>
        <div className="trophy-case-box">
          <UserAchievements/>
        </div>
      </>
    )
  }
  else return (
    <p>Loading...</p>
  )
}

export default TrophyCase