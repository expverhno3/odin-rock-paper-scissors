console.log("hello world in external js!")

// note: init global variables
let rock_counter = 0
let paper_counter = 0
let scissor_counter = 0
let humanScore = 0
let computerScore = 0


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
    if (human_choice === "paper") {
        if (computer_choice === "paper") {
            console.log("tie")
        } else if (computer_choice === "rock") {
            console.log("human wins")
            humanScore += 1
        }  else if (computer_choice === "scissor") {
            console.log("computer wins")
            computerScore += 1
        }
    }
    else if (human_choice === "rock") {
        if (computer_choice === "rock") {
            console.log("tie")
        } else if (computer_choice === "scissor") {
            console.log("human wins")
            humanScore += 1
        } else if (computer_choice === "paper") {
            console.log("computer wins")
            computerScore += 1
        }
    }
    else if (human_choice === "scissor") {
        if (computer_choice === "scissor") {
            console.log("tie")
        } else if (computer_choice === "paper") {
            console.log("human wins")
            humanScore += 1
        } else if (computer_choice === "rock") {
            console.log("computer wins")
            computerScore += 1
        }
    }
}



for (let index = 0; index < 10; index++) {
    let computer_choice = getComputerChoice()
    let human_choice = getHumanChoice()
    console.log(`Human choice is: ${human_choice}`)
    console.log(`Computer choice is: ${computer_choice}`)
    playRound(human_choice, computer_choice)
    console.log(`Scores Human vs. Computer`)
    console.log(`${humanScore} vs. ${computerScore}`)

}
