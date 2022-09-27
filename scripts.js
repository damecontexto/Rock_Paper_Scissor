function getComputerChoice(){

    let choice;
    choice = Math.floor(Math.random() * 3) + 1;
    
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


function playRound(playerSelection, computerSelection){

    const win = "You win! " + playerSelection + " beats " + computerSelection;
    
    const lose = "You lose! " + computerSelection + " beats " + playerSelection;

    if (playerSelection == "rock" && computerSelection == "paper"){
    return lose;
   } else if (playerSelection == "rock" && computerSelection == "scissor"){
    return win;
   } else if (playerSelection == "paper" && computerSelection == "rock"){
    return win;
   } else if (playerSelection =="paper" && computerSelection == "scissor"){
    return lose;
   } else if (playerSelection == "scissor" && computerSelection == "rock"){
    return lose;
   } else if (playerSelection == "scissor" && computerSelection == "paper"){
    return win;
   } else if (playerSelection == computerSelection){
    return "That's a tie! Try again";
   } else {
    return "Wrong answer";
   }
}

function game(){

    let winCount = 0;

    let loseCount = 0;

    for (let i = 0; i < 5; i++) {

        answer = prompt("Choose: Rock, Paper or Scissor");
        
        playerSelection = answer.toLowerCase();
        
        console.log("You choose: " + playerSelection);
        
        computerSelection = getComputerChoice();
        
        console.log("Computer chooses: " + computerSelection);
        
        console.log(playRound(playerSelection, computerSelection));
        
        if (playRound(playerSelection, computerSelection).includes("win")) {
            
            winCount++; 

        } else if (playRound(playerSelection, computerSelection).includes("lose")){

            loseCount++;
        }

        console.log("\n");

    }

    if (winCount > loseCount) {

        console.log("You won the match by " + winCount + " to " + loseCount);
        
    } else {

        console.log("You lost the match by " + winCount + " to " + loseCount)
    }

}

console.log(game());


