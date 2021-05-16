let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = num =>{
  // nummer tussen 0 en 9 dus geen 0 en geen 10
  return Math.floor(Math.random() * 9) + 1;
}

//console.log(`Target: ${generateTarget()}`);

function compareGuesses(target, computer, human){
    if(Math.abs(humanScore - generateTarget) < Math.abs(computerScore - generateTarget)){
      //return 'You win!'
      return true;
    } else if(Math.abs(computerScore - generateTarget) < Math.abs(humanScore - generateTarget)){
      //return 'Computer wins!'
      return false;
    } else {
      //return 'You win!'
      return true;
    }
}

const updateScore = () => {
  if(updateScore === 'human'){
    humanScore ++;
  } else {
    computerScore ++;
  }
}

const advanceRound = () => {
  currentRoundNumber ++;
}