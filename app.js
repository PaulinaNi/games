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


for (let i = 0; i < arrayOfChoices.length; i++) {
 arrayOfChoices[i].addEventListener("click", () => {
  let playerChoice
  let computerChoice

  //input player choice
  playerChoice = arrayOfChoices[i].id

  // hide other option, so only choosen option will be shown
  for (let y = 0; y < arrayOfChoices.length; y++) {
   if (y !== i) {
    arrayOfChoices[y].style.display = "none"
   }
  }

  //randomise computer option

  let randomNum = Math.ceil(Math.random() * 3)
  console.log(randomNum)
  if (randomNum === 1) { computerChoice = "rock" }
  if (randomNum === 2) { computerChoice = "paper" }
  if (randomNum === 3) { computerChoice = "scissors" }

  //add img of computer choice

  const computerChoiceImg = document.querySelector(".computerChoiceImg")
  computerChoiceImg.style.display = "block"
  if (computerChoice = "rock") {
   computerChoiceImg.src = "/images/rock.svg"
  } else if (computerChoice = "paper") {
   computerChoiceImg.src = "/images/paper.svg"
  }
  else if (computerChoice = "scissors") {
   computerChoiceImg.src = "/images/scissors.svg"
  }

  const playerNameForm = document.querySelector(".playerNameForm")
  playerNameForm.style.display = "none"

  //who is the winner 
  let winner
  if(playerChoice === "rock" && computerChoiceImg === "rock") {displayWinner.textContent = `Draw`}
  else if(playerChoice === "rock" && computerChoiceImg === "paper") {winner = "Computer"}
  else if(playerChoice === "rock" && computerChoiceImg === "scissors") {winner = playerNameInput.value}

  //display winner
  const displayWinnerContainer = document.querySelector(".results")
  const displayWinner = document.querySelector(".winner")
  displayWinnerContainer.style.display = "block"
  displayWinner.textContent = `The winner is ${winner}!`


  console.log(playerChoice)
  console.log(computerChoice)
 })
}