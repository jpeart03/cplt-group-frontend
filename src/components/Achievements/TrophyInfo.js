import trophyObjsArray from "./trophyObjs"


const TrophyInfo = () => {
  return (
      trophyObjsArray.map((xTrophy, index) => {
        let xName = xTrophy.achName
        let xDesc = xTrophy.achDesc
        return(
          <p><span style={{color:"#00aced"}}>{xName}</span>: {xDesc}</p>
        )
      }
      )
    )
}


// const TrophyInfo = () => {
//   return (
//     <div className="trophy-info-box">
//       <TrophyList/>
//     </div>
//   )
// }

export default TrophyInfo