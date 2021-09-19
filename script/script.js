
const userButtons = window.document.querySelectorAll("input[type=button]"); 

const ours = [0,1,2]; 
const them = [3,4,5];

const userImg = document.querySelector('img#user-img'); 
const alienImg = document.querySelector('img#alien-img');

for (let i in ours) {  
    userButtons[i].addEventListener('mouseenter', () => { 
    userButtons[i].style.background = '#863A8D'; }) 

    userButtons[i].addEventListener('mouseout', () => { 
    userButtons[i].style.background = '#75147E'; }) 

    userButtons[i].addEventListener('click', () => { 

    let userChoicePromise = new Promise((resolve) => { 
    
    var textChoice = userButtons[i].value; 

    if (textChoice == 'rock') {
        let userImgParam = {source: './images/rock.png', alt: `${textChoice}`}; 
        resolve(userImgParam); 

    } else if (textChoice == 'paper'){ 
        let userImgParam = {source: './images/paper.png', alt: `${textChoice}`}; 
        resolve(userImgParam);

    } else { 
        let userImgParam = {source: './images/scissors.png', alt: `${textChoice}`}; 
        resolve(userImgParam); 
    }})

    userChoicePromise.then((param) => { 
    userImg.style.display = 'block';
    userImg.src = param.source;  
    userImg.alt = param.alt;  
    userImg.style.height = '150px'; 
    })});
    
    userButtons[i].addEventListener('click', () => { 
    
    let alienChoicePromise = new Promise((resolve) => { 
    
    var x = Math.random(); 

    if (x < 0.33) { 
        let alienImgParam = {source: './images/rock.png', alt: 'rock'};
        resolve(alienImgParam);

    } else if (x > 0.66) { 
        let alienImgParam = {source: './images/scissors.png', alt: 'scissors'};
        resolve(alienImgParam);

    } else { 
        let alienImgParam = {source: './images/paper.png', alt: 'paper'};
        resolve(alienImgParam);

    }})

    alienChoicePromise.then((param) => { 
        alienImg.style.display = 'block';
        alienImg.src = param.source; 
        alienImg.alt = param.alt;
        alienImg.style.height = '150px';
    })})

    userButtons[i].addEventListener('click', gameResult);

    };

var log = document.querySelector('h4#log');
var userScoreShow = document.querySelector('h5#user-score');
var alienScoreShow = document.querySelector('h5#alien-score');

function gameResult(){ 
    var userChoice = userImg.alt;
    var alienChoice = alienImg.alt;
    
    var userScore = Number(userScoreShow.innerText);
    var alienScore = Number(alienScoreShow.innerText);
    
    if (userChoice == alienChoice) { 
        log.innerText = "It's a tie! No one scored";
        log.style.color = "#ffffff";
    } else if ((userChoice == 'rock' && alienChoice =='scissors') || (userChoice == 'scissors' && alienChoice == 'paper') || (userChoice == 'paper' && alienChoice == 'rock')){ 
        log.innerText = "You won!";
        log.style.color = "rgb(47, 163, 47)";
        userScore++;
        userScoreShow.innerText = userScore;
    } else { 
        log.innerText = "You lost :(";
        log.style.color = "rgb(199, 37, 37)";
        alienScore++;
        alienScoreShow.innerText = alienScore;
    }

    if (userScore == 5 || alienScore == 5){ 
        if (userScore > alienScore) { 
            endGame('You won the round!', "rgb(47, 163, 47)");
        } else {
            endGame('You lost the round', "rgb(199, 37, 37)");
        }
    }
}

function endGame(message, messageColor){
    var finishBox = document.querySelector('div.finish-box');
    finishBox.innerText = message;
    finishBox.style.color = messageColor;
    finishBox.style.display = "flex";
    finishBox.style.justifyContent = "center";
    setTimeout(() => {
        finishBox.style.display = "none";
        resetGame();
    }, 2500);
}  

const resetButton = document.querySelector('button#reset-game');
resetButton.addEventListener('click', resetGame);

function resetGame(){ 
    userScoreShow.innerText = 0;
    alienScoreShow.innerText = 0;
    log.innerText = '';
    userImg.style.display = 'none';
    alienImg.style.display = 'none';
}

const alienMsg = document.querySelector('span'); 

for (let i in them) {  
    let e = them[i]; 
    userButtons[e].addEventListener('click', () => {  
    alienMsg.style.opacity = '1'; 
    setTimeout(() => {alienMsg.style.opacity = '0'}, 4000); 
})}