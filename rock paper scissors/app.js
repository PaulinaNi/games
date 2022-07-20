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
  const randomNum = Math.ceil(Math.random() * 3)
  if (randomNum === 1) { computerChoice = "rock" }
  else if (randomNum === 2) { computerChoice = "paper" }
  else if (randomNum === 3) { computerChoice = "scissors" }

  //add img of computer choice
  const computerDiv = document.querySelector(".computer")
  computerDiv.style.display = "block"
  const computerChoiceImg = document.querySelector(".computerChoiceImg")
  if(computerChoice = "rock"){
   computerChoiceImg.src = "/images/rock.svg"
  } else if(computerChoice = "paper"){
   computerChoiceImg.src = "/images/paper.svg"
  }
  else if(computerChoice = "scissors"){
   computerChoiceImg.src = "/images/scissors.svg"
  }

  //display winner

  
  console.log(playerChoice)
  console.log(computerChoice)
 })
}