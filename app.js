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
  if (playerSelection === "paper") {
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

  if (playerSelection === "scissors") {
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

playerScore = parseInt(0); // set playerScore = 0
computerScore = parseInt(0); // set computerScore = 0;

//ask player's decision and calculate scores
function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors");
    const computerSelection = computerPlay();
    console.log("Player score = " + playerScore);
    console.log("Computer score = " + computerScore);
  }
}
game();
