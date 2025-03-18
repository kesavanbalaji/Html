let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();
/*if (!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}*/

let intervalId;
let isAutoPlaying = false;
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const autoPlayerMove = pickComputerMove();
            playerGame(autoPlayerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.js-autoplay-button').innerHTML = 'Stop Playing';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.js-autoplay-button').innerHTML = 'Auto Play';
    }
}
function playerGame(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You Lose';
        } else if (computerMove === 'scissors') {
            result = 'You Win';
        }


    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You Lose';
        }


    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose';
        } else if (computerMove === 'paper') {
            result = 'You Win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
    updateScoreElement();
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You <img src="${playerMove}-emoji.png" alt="" class="move"> <img src="${computerMove}-emoji.png" alt="" class="move"> Computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

document.querySelector('.rock-button').addEventListener('click', () => {
    playerGame('rock');
});
document.querySelector('.paper-button').addEventListener('click', () => {
    playerGame('paper');
});
document.querySelector('.scissors-button').addEventListener('click', () => {
    playerGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playerGame('rock');
    } else if (event.key === 'p') {
        playerGame('paper');
    } else if (event.key === 's') {
        playerGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        resetConfirmation();
    }
});

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

document.querySelector('.js-reset-button').addEventListener('click', () => {
    resetConfirmation();
});
document.querySelector('.js-autoplay-button').addEventListener('click', () => {
    autoPlay();
});

function resetConfirmation() {
    document.querySelector('.js-reset-score-confirm').innerHTML = 'Are you sure you want to reset the score ?<button class="js-reset-yes-button reset-confirm-css">Yes</button><button class="js-reset-no-button reset-confirm-css">No</button>';
    document.querySelector('.js-reset-yes-button').addEventListener('click', () => {
        resetScore();
        hideResetConfirmation();
    });
    document.querySelector('.js-reset-no-button').addEventListener('click', () => {
        hideResetConfirmation();
    });

}
function hideResetConfirmation() {
    document.querySelector('.js-reset-score-confirm').innerHTML = '';
}
