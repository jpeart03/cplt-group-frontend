
let getTrophyBoolArray= (currentUser) => {
  let trophyBoolArray = []
  let achievementKeys = [
    "worlds_best_boss_1",
    "worlds_best_boss_2",
    "worlds_best_boss_3",
    "cassanova_1",
    "cassanova_2",
    "cassanova_3",
    "short_and_sweet",
    "dickens",
    "it_takes_committment_1",
    "it_takes_committment_2",
    "it_takes_committment_3",
    "sleep_mode",
    "lunch_break",
    "forget_me_not",
    "networking_1",
    "networking_2",
    "networking_3",
    "sentimental",
    "what_year_is_it",
    "nerd",
    "old_school"
    ]
  
  let xboolarr= achievementKeys.map((key, index) => {
    trophyBoolArray.push(currentUser[key])
  })
  console.log(xboolarr)

  console.log(trophyBoolArray)
  return trophyBoolArray
}

export default getTrophyBoolArray;