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
let chooseMode = prompt(
  "choose mode: insert 1 (for single round) or 2 for (best out of three)"
);

if (chooseMode === "2") {
  function game() {
    //use while loop. keep looping until either one of player wins
    let i = 1;

    //keep looping until each score gets to 2
    while (playerScore < 2 && computerScore < 2) {
      let playerSelection = prompt("Choose rock, paper or scissors");
      const computerSelection = computerPlay();
      alert(playRound(playerSelection, computerSelection));
      i++;
      console.log("Player score = " + playerScore);
      console.log("Computer score = " + computerScore);
    }
  }
  game();

  ////////Log in final result after 3 rounds
  if (playerScore > computerScore) {
    console.log("you win!");
  } else if (playerScore === computerScore) {
    console.log("tie!");
  } else {
    console.log("You lose!");
  }
} else if (chooseMode === "1") {
  let playerSelection = prompt("Choose rock, paper or scissors");
  const computerSelection = computerPlay();
  alert(playRound(playerSelection, computerSelection));
  console.log("Player score = " + playerScore);
  console.log("Computer score = " + computerScore);

  if (playerScore > computerScore) {
    console.log("you win!");
  } else if (playerScore === computerScore) {
    console.log("tie!");
  } else {
    console.log("You lose!");
  }
} else {
  alert("Type Error! Try again");
}
