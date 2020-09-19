# Roshambo
Rock 🗿, Paper 📄, Scissors ✂!

```~> npm install -g @nickgraffis/roshambo```
```~> roshambo```
# Game Play
You can play Rock, Paper, Scissors!

# How it works?
At the heart, it accepts two responses. One from player a and one from player b. It assigns the response a numeric value:
```//rock = 0, paper = 1, scissors = 2```
It then computes ((player a - player b) + total_options(3)) % 3. If the answer is 1, player a wins, if not, player b wins. If the numbers are equal, it is a tie.

```
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
```

Have Fun!
