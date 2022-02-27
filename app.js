function computerPlay() {
  const random = Math.random();
  if (random < 0.34) {
      //return rock if random is 0.34
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(computerPlay());
