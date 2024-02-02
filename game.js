const rps = {'rock':1, 'paper':2, 'scissors':3}
const wins = {'-2':'Player', '-1': 'Computer', '1':'Player', '2':'Computer'}

const computersChoice = document.querySelector('.computersChoice')
const playersChoice = document.querySelector('.playersChoice')
const gameresult = document.querySelector('.gameresult')

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
    function playRound(event) {
        const playerSelection = event.target.id
        playersChoice.textContent = playerSelection

        const computerSelection = getComputerChoice()
        computersChoice.textContent = computerSelection

        const result = (rps[playerSelection]-rps[computerSelection])
        
        if(result === 0){
            gameresult.textContent = 'draw'
        }else{
            gameresult.textContent = `${wins[result]} wins!`
        }
    }
    const choice = document.querySelector('.choice')
    choice.addEventListener('click', playRound)
}

game()