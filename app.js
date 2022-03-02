"use strict";

//create computer's choices

function computerPlay() {
  const random = Math.random();
  if (random < 0.34) {
    //return rock if random is 0.34
    return "rock";
  } else if (random <= 0.67) {
    //return paper if random is 0.67
    return "paper";
  } else {
    //return scissors if random is > 0.67 and < 1
    return "scissors";
  }
}

var playerScore = 0;
var computerScore = 0;

//if..else to determine who is the winner/ draw based on playerSelection and ComputerSelection
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    //convert all word variation to rock. ie: Rock, ROck, roCk etc
    if (computerSelection === "rock") {
      computerScore++;
      playerScore ++;
      return "Tie";
    } else if (computerSelection === "paper") {
      computerScore++;
      return "Computer Wins";
    } else {
      playerScore++;
      return "Player Wins";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "Player Wins";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "Computer Wins";
    } else {
      return "Tie";
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "Computer Wins";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "Player Wins";
    } else {
      return "Tie";
    }
  }
}

//ask player's decision and calculate scores
function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
    console.log("Player score = " + playerScore);
    console.log("Computer score = " + computerScore);

  }
}
game();

