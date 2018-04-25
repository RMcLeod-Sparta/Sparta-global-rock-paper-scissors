
var playerScore = 0;
var compScore = 0;
function makeid() {
  var text = "";
  var possible = "rps";
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
//The computer randomly gets a character r, p or s relating to rock paper or
//scissors to compare against the players choice.
function displayScore(){
  alert("Player Score - " + playerScore + " -- " + compScore + " - Computer Score" );
}
//A function for displaying the score at the end of each round.
for(i = 0;i < 5;i++){
  var playerInput = prompt("Choose one. (r)ock (p)aper (s)cissors")
  var compInput = makeid();
  //converting the value returned from makeid into a var outside the function.
switch (playerInput) {
  case "r":
    if(compInput == "s"){
      playerScore++;
    }else if (compInput == "p") {
      compScore++;
    }
      displayScore();
    break;
    case "p":
    if(compInput == "r"){
      playerScore++;
    }else if (compInput == "s") {
      compScore++;
    }
    displayScore();
      break;
    case "s":
    if(compInput == "p"){
      playerScore++;
    }else if (compInput == "r") {
      compScore++;
    }
    displayScore();
    break;
  default:
  alert("That was not a valid input");
  i--;
  //A switch to determin who wins each round and display the scores and also
  //counts i down if an invalid inpt is chosen as to always have 5 rounds.
}
}
if (playerScore>compScore) {
  alert("Congratulations you Won!")
}else if(playerScore<compScore) {
  alert("Sorry you lost")
}else{
  alert("It's a Draw")
}
//An alert telling the player the result of the match.
