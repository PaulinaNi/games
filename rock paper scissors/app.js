// player name change code

const playerNameInput = document.getElementById("playerName")
const changeNameSubmitBtn = document.getElementById("changeNameSubmitBtn")
const playerNameDisplay = document.getElementById("playerNameDisplay")

changeNameSubmitBtn.addEventListener("click", (e) => {
 e.preventDefault()
 playerNameDisplay.textContent = playerNameInput.value
 playerNameInput.value = ''
})

//game code
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const arrayOfChoices = [rock, paper, scissors]

let playerChoice

for (let i = 0; i < arrayOfChoices.length; i++){
 arrayOfChoices[i].addEventListener("click", ()=>{
  playerChoice = arrayOfChoices[i].id
  console.log(playerChoice)
 })
}