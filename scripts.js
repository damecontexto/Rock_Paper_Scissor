function getComputerChoice(){
    let choice;
    choice = Math.floor(Math.random() * 3) + 1;
    /*console.log(choice);*/
    if (choice == 1){
        return "rock"; 
    }
    else if (choice == 2){
        return "paper";
    }
    else {
        return "scissor";
    }
}
/*console.log(getComputerChoice());*/

function playRound(playerSelection, computerSelection){
   if (playerSelection == "rock" && computerSelection == "paper"){
    console.log("You Lose! Paper beats Rock");
   } else if (playerSelection == "rock" && computerSelection == "scissor"){
    console.log("You win! Rock beats Scissor");
   } else if (playerSelection == "paper" && computerSelection == "rock"){
    console.log("You Win! Paper beats Rock");
   } else if (playerSelection =="paper" && computerSelection == "scissor"){
    console.log("You Lose! Scissor beats Paper");
   } else if (playerSelection == "scissor" && computerSelection == "rock"){
    console.log("You Lose! Rock beats Scissor");
   } else if (playerSelection == "scissor" && computerSelection == "paper"){
    console.log("You Win! Scissor beats Paper");
   } else {
    console.log("That's a tie! Try again")
   }
   
}

answer = prompt("Choose: Rock, Paper or Scissor");
playerSelection = answer.toLowerCase();
computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
