const playerChoiceOptions = document.querySelectorAll('.choiceOptions')
const computerChoiceImg = document.querySelector('.computerChoiceImg')
const resultsContainer = document.querySelector('.results')
const winnerContainer = document.querySelector('.winner')
const resetGameButton = document.querySelector('.resetGameButton')

let playerChoice
let computerChoice
let resultString // string to display winner

function hiddeOtherPlayerChoiceOptions(id) {
  playerChoiceOptions.forEach(img => {
    if (img.id !== id) {
      img.style.display = 'none'
    }
  })
}

function rendomiseComputerChoice() {
  const randomNum = Math.ceil(Math.random() * playerChoiceOptions.length)
  console.log(randomNum)
  switch (randomNum) {
    case 1:
      computerChoice = 'rock'
      break;
    case 2:
      computerChoice = 'paper'
      break;
    case 3:
      computerChoice = 'scissors'
      break;
  }
}

function displayComputerChoice(id) {
  computerChoiceImg.style.display = 'block'
  computerChoiceImg.src = `/images/${id}.svg`
}

function getWinner() {
  switch (playerChoice + computerChoice) {
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      resultString = "It's a draw"
      break
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      resultString = "Player is the winner!"
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      resultString = "Computer is the winner!"
      break
  }
}

function showWinner() {
  resultsContainer.style.display = 'block'
  winnerContainer.textContent = resultString
}

function game(id) {
  playerChoice = id
  hiddeOtherPlayerChoiceOptions(id)
  rendomiseComputerChoice()
  displayComputerChoice(computerChoice)
  getWinner()
  showWinner()
}

playerChoiceOptions.forEach(option => option.addEventListener('click', (e) => {
  game(e.target.id)
}))

resetGameButton.addEventListener('click', () => {
  playerChoiceOptions.forEach(img => {
    img.style.display = 'inline-block'
  })
  resultsContainer.style.display = 'none'
  computerChoiceImg.style.display = 'none'
})