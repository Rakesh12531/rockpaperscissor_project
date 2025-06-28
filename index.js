let choices = ['rock','paper','scissors'];
let playerDisplay = document.getElementById("yourChoice");
let computerDisplay =  document.getElementById("computerChoice");
let resultDisplay = document.getElementById("result");
let yourScoreDisplay = document.getElementById("yourScore");
let computerScoreDisplay = document.getElementById("computerScore");
let yourScore = 0;
let computerScore = 0;
let result;

function playgame(playerchoice){
    let compchoice = choices[Math.floor(Math.random()*3)] ;
    if(playerchoice === compchoice){
        result = "It's a Tie!";
    }
    else{
        switch(playerchoice){
            case 'rock':
                result = compchoice==='paper'?"You Lose!":"You Win!";
                break;
            case 'paper':
                result = compchoice==='scissors'?"You Lose!":"You Win!";
                break;
            case 'scissors':
                result = compchoice==='rock'?"You Lose!":"You Win!";
                break;
        }
    }

    playerDisplay.textContent = `Player : ${playerchoice}`;
    computerDisplay.textContent = `Computer : ${compchoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greentext","redtext");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greentext");
            yourScore++;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            break;
    }

    yourScoreDisplay.textContent = `Your Score : ${yourScore}`;
    computerScoreDisplay.textContent = `Computer Score : ${computerScore}`;

}