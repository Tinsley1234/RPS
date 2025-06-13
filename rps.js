function computerPlays(){
    const randomMove = Math.floor(Math.random()*3)+ 1;
    let computerMove = '';
    if (randomMove === 1){
        computerMove = 'Rock';
    }else if (randomMove === 2){
        computerMove = 'Paper';
    }else if (randomMove === 3){
        computerMove = 'Scissors';
    }
    return computerMove ;
}

let score = JSON.parse(localStorage.getItem('Score'))
document.querySelector(".scoreboard").innerHTML=`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
function playGame(playerMove){
    let computerMove = computerPlays();
    let result = '';
    if(playerMove === 'Rock'){
        if (computerMove === 'Paper'){
            result = 'Computer wins';
        }else if (computerMove === 'Scissors'){
            result = 'You win';
        }else if (computerMove === 'Rock'){
           result = 'Tie';
        }
    }
    if(playerMove === 'Paper'){
        if (computerMove === 'Scissors'){
            result = 'Computer wins';
        }else if (computerMove === 'Rock'){
            result = 'You win';
        }else if (computerMove === 'Paper'){
           result = 'Tie';
        }
    }
    if(playerMove === 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'Computer wins';
        }else if (computerMove === 'Paper'){
            result = 'You win';
        }else if (computerMove === 'Scissors'){
           result = 'Tie';
        }
    }
    if (result === "You win"){
        score.wins+=1;
    }else if(result === "Computer wins"){
        score.losses += 1;
    }else if(result === "Tie"){
        score.ties += 1;
    }
    document.querySelector(".choices").innerHTML= `You 
        <img src="images/${playerMove}.png" alt="" class="img2">
        <img src="images/${computerMove}.png" alt="" class="img2">
        Computer`;
    document.querySelector(".result").innerHTML= `${result}`
    scoreUpdate();
}
function scoreUpdate(){
    document.querySelector(".scoreboard").innerHTML=`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
    localStorage.setItem('Score', JSON.stringify(score))
}

let isPlaying = false;
let interval;
let colorOfButton = document.querySelector('.autoplay')
function autoplay(){
    if (!isPlaying){
        bgColor.style.backgroundColor = "green";
        interval = setInterval(() =>{
        playGame(computerPlays())
        // const playerMove = computerPlays();
        // playGame(playerMove)
    }, 1000) 
    isPlaying = true;       
    }else{
        bgColor.style.backgroundColor = "white";
        clearInterval(interval);
        isPlaying = false;
    }
}

let bgColor = document.querySelector('.autoplay')