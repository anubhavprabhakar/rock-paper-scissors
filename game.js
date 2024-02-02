function getComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    if(x===1){
        return "rock"
    }else if(x===2){
        return "paper"
    }else{
        return "scissors"
    }
}

function game(){
    function playRound(playerSelection, computerSelection) {
        let p=playerSelection.toLowerCase()
        if(p==="rock"){
            if(computerSelection==="paper"){
                return "you lose. paper beats rock."
            }else if(computerSelection==="scissors"){
                return "you win! Rock beats scissors."
            }else{
                return "draw. play again"+" choice: "+p
            }
        }else if(p==="paper"){
            if(computerSelection==="rock"){
                return "you win! paper beats rock."
            }else if(computerSelection==="scissors"){
                return "you lose. scissors beat paper."
            }else{
                return "draw. play again"+" choice: "+p
            }
        }else if(p==="scissors"){
            if(computerSelection==="rock"){
                return "you lose! rock beats scissors."
            }else if(computerSelection==="paper"){
                return "you win. scissors beat paper."
            }else{
                return "draw. play again"+" choice: "+p
            }
        }
    }
    
}

game()