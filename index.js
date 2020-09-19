const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors (playerA, playerB) {
  var options = ['rock', 'paper', 'scissors'];
  var a = options.indexOf(playerA);
  var b = options.indexOf(playerB);
  if (a == b) {
    return 2;
  } else if (((a - b) + 3) % 3 == 1) {
    return 0;
  } else {
    return 1;
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function emojify(computerHand) {
  if (computerHand === 'rock') {
    return computerHand + ' 🗿!';
  } else if (computerHand === 'paper') {
    return computerHand + ' 📄!';
  } else {
    return computerHand + ' ✂!';
  }
}

var userScore = 0;
var computerScore = 0;
var recursiveAsyncReadLine = function () {
  if (userScore > 2 || computerScore > 2) {
    if(userScore > computerScore) {
      console.log('🏆 You win!');
    } else {
      console.log('🥉 You lose!');
    }
    readline.close();
    process.exit();
  }
  readline.question('Rock, Paper, Scissors  \n>', userHand => {
      var acceptableResponses = ['Rock', 'rock', 'Paper', 'paper', 'Scissors', 'scissors'];
      var hands = ['Rock', 'Paper', 'Scissors'];
      var computerHand = hands[randomInt(3)];
      if (userHand === 'exit') {
          readline.close();
          process.exit();
      } else if (acceptableResponses.includes(userHand)){
        console.log(emojify(computerHand.toLowerCase()));
        var outcome = rockPaperScissors(userHand.toLowerCase(), computerHand.toLowerCase());
        if (outcome == 0) {
          userScore++;
          console.log('🎉 You win! Score is ' + userScore + " to " + computerScore + '!');
        } else if (outcome == 1) {
          computerScore++;
          console.log('😿 You lose! Score is ' + userScore + " to " + computerScore + '!');
        } else {
          console.log('Tie! Score is ' + userScore + " to " + computerScore + '!');
        }
      } else {
        console.log('😡 That\s cheating!');
      }
      recursiveAsyncReadLine();
  });
}
recursiveAsyncReadLine();
