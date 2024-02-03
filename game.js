const rps = {'rock':1, 'paper':2, 'scissors':3}
const wins = {'-2':'Player', '-1': 'Computer', '1':'Player', '2':'Computer'}

const computersChoice = document.querySelector('.computersChoice')
const playersChoice = document.querySelector('.playersChoice')
const roundresult = document.querySelector('.roundresult')

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

const score = {'Player': 0, 'Computer': 0}
const runningScore = document.querySelector('.runningscore')

function updateRunningScore(){
    runningScore.textContent = `Computer: ${score['Computer']} Player: ${score['Player']}`
}

function game(){
    let rounds = 5    
    updateRunningScore()
    
    function playRound(event) {
        console.log(rounds)
        rounds--
        if(!rounds){
            const buttons = document.querySelectorAll('button')
            buttons.forEach((button)=>{button.disabled = true})
            choice.removeEventListener('click', playRound)
            const finalResult = document.createElement('div')
            if(score['Player']>score['Computer']){
                finalResult.textContent = `Final Result: Player wins the game!`
            }else if(score['Player']<score['Computer']){
                finalResult.textContent = `Final Result: Computer wins the game!`
            }else{
                finalResult.textContent = `Final Result: Draw`
            }
            roundresult.parentElement.appendChild(finalResult)
        }

        const playerSelection = event.target.id
        playersChoice.textContent = playerSelection

        const computerSelection = getComputerChoice()
        computersChoice.textContent = computerSelection

        const result = (rps[playerSelection]-rps[computerSelection])
        
        if(result === 0){
            roundresult.textContent = 'Round Result: Draw'
        }else{
            const winner = wins[result]
            roundresult.textContent = `Round Result: ${winner} wins!`
            score[winner]+=1
        }
        updateRunningScore()
    }
    const choice = document.querySelector('.choice')
    choice.addEventListener('click', playRound)
}

game()