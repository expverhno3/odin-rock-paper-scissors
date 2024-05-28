console.log("hello world in external js!")

// note: init global variables
let humanScore = 0
let computerScore = 0
let highestScore = 0

let humanChoice = ''
let computerChoice = ''

// const paper = document.querySelector("button.paper")
// const scissor = document.querySelector("button.scissor")
// const rock = document.querySelector("button.rock")

const buttons = document.querySelectorAll("button")
const result = document.querySelector("div.result")
const choiceSpan = document.createElement("span")
const resultSpan = document.createElement("span")
const score = document.querySelector("div.score")
const scoreShow = document.createElement("h2")
choiceSpan.classList.add("choice")
resultSpan.classList.add("result")
scoreShow.classList.add("show")
result.appendChild(choiceSpan)
result.appendChild(resultSpan)
score.appendChild(scoreShow)
choiceSpan.insertAdjacentHTML('afterend', '<br>');



function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    if (choice < 1){
        return "rock"
    } else if (choice < 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function isValidChoice(choice) {
    if (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        return false
    }
    else return true
}

function choiceConverter(choice) {
    if (choice === "1"){
        return "rock"
    } else if (choice === "2") {
        return "paper"
    } else if (choice === "3") {
        return "scissor"
    } else {
        return undefined
    }
}


function getHumanChoice() {
    let indicator = false
    while (!indicator) {
        let choice = prompt("please choose: 1 for rock, 2 for paper, 3 for scissor")
        choice = choiceConverter(choice)
        if (isValidChoice(choice)) {
            indicator = true
            return choice
        } else {
            console.log("invalid choice! please re-enter your choice!")
        }
    }
}

function playRound(human_choice, computer_choice) {
    resultMessage = ""
    if (human_choice === "paper") {
        if (computer_choice === "paper") {
            console.log("tie")
            resultMessage = "tie"
        } else if (computer_choice === "rock") {
            console.log("human wins")
            resultMessage = "human wins"
            humanScore += 1
        }  else if (computer_choice === "scissor") {
            console.log("computer wins")
            resultMessage = "computer wins"
            computerScore += 1
        }
    }
    else if (human_choice === "rock") {
        if (computer_choice === "rock") {
            console.log("tie")
            resultMessage = "tie"
        } else if (computer_choice === "scissor") {
            console.log("human wins")
            resultMessage = "human wins"
            humanScore += 1
        } else if (computer_choice === "paper") {
            console.log("computer wins")
            resultMessage = "computer wins"
            computerScore += 1
        }
    }
    else if (human_choice === "scissor") {
        if (computer_choice === "scissor") {
            console.log("tie")
            resultMessage = "tie"
        } else if (computer_choice === "paper") {
            console.log("human wins")
            resultMessage = "human wins"
            humanScore += 1
        } else if (computer_choice === "rock") {
            console.log("computer wins")
            resultMessage = "computer wins"
            computerScore += 1
        }
    }
    resultSpan.textContent = resultMessage
    choiceSpan.textContent = `Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`
}

function playerSelection(button) {
    console.log(button.className)
    if (button.className === "paper"){
        return 'paper'
    }
    else if (button.className === "scissors") {
        return "scissor"
    }
    else if (button.className === "rock") {
        return "rock"
    }
}

function gameOver() {
    resultSpan.textContent = ''
    choiceSpan.textContent = ''
    if (humanScore > computerScore) {
        scoreShow.textContent = "Human Player Wins!!"
    }else {
        scoreShow.textContent = "Computer Player Wins!!"
    }
    highestScore = 0
    humanScore = 0
    computerScore = 0
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        humanChoice = playerSelection(e.target)
        console.log(`humanChoice is: ${humanChoice}`)
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        scoreShow.textContent = `Human vs. Computer: ${humanScore} : ${computerScore}`
        highestScore = Math.max(humanScore, computerScore)
        if (highestScore === 5){
            gameOver()
        }
    })
})






