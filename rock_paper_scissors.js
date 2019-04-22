var computerAnswer = Math.floor(Math.random() * 3) + 1;
var playerAnswer = prompt("Rock, paper, scissors?");
var revisedComputerAnswer = "none";

console.log(computerAnswer);
console.log(playerAnswer);
if (computerAnswer = 1) {
	revisedComputerAnswer = "rock";
}
	else if (computerAnswer = 2) {
  revisedComputerAnswer = "paper";
}
  else  {revisedComputerAnswer = "scissors";}

console.log(revisedComputerAnswer);

if(revisedComputerAnswer === playerAnswer) {
    console.log("The result is a tie!");
 }
 
if(revisedComputerAnswer === "rock") {
    if(playerAnswer === "scissors") {
        console.log("rock wins");
    } else {
        console.log("paper wins");
    }
}
if(revisedComputerAnswer=== "paper") {
    if(playerAnswer === "rock") {
        console.log("paper wins");
    } else {
        console.log("scissors wins");
    }
}
if(revisedComputerAnswer === "scissors") {
    if(playerAnswer === "rock") {
        console.log("rock wins");
    } else {
        console.log("scissors wins");
    }
 }





