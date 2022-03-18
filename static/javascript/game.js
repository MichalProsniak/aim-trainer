initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
//zmieniac time w updateCountdown oraz maxTimer w rankedModeStart, żeby były takie same

var startingMinutes = 5;
var time = startingMinutes * 60 - 1;
let hitCounter=-1;
var gameMode = 2;
var maxTimer = 2*60;
var targetColor = "red";
let missCounter=0;
let update = false;
var myInterval;
let clicked = false;

function crosshairPointer() {
    let board = document.getElementById("board-btn");
    let target = document.getElementById('btn');
    board.style.cursor = "crosshair";
    target.style.cursor = "crosshair";

}

function changePosition() {

    let btn = document.getElementById('btn');
    let buttonBoard = document.getElementsByClassName('board-button');
    btn.innerHTML = "";
    btn.classList.add('target-button');
    buttonBoard[0].onclick = function (){
        statistics(hitCounter, countMiss());
    }
    changeTargetColor()
    btn.classList.remove('target-button-start');
    btn.classList.remove('btn');
    btn.classList.remove('btn-success');
    btn.style.top = Math.floor((Math.random() * 750) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 900) + 1) + "px";
    btn.classList.remove('target-button');
    window.requestAnimationFrame(function (){
        btn.classList.add('target-button');
    });
    hitCounter +=1;
    return hitCounter

}

function countMiss(){
    missCounter+=1;
    return missCounter
}


function statistics(hitCounter, missCounter) {
    let messageMode;
    if (gameMode === 1) {
        messageMode = "Easy";
    } else if (gameMode === 2) {
        messageMode = "Medium";
    } else {
        messageMode = "Ranked";
    }
    let shootCounter=hitCounter+missCounter;
    let accuracy = hitCounter/shootCounter * 100;
    let hitsPerSecond = hitCounter/(maxTimer - time + 1);
    hitsPerSecond = hitsPerSecond.toFixed(2).toString() + "hit/s"
    if (Number.isNaN(accuracy)) {
        accuracy = 0;
    }
    accuracy = accuracy.toFixed(2).toString() + "%";
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("difficulty").innerHTML = messageMode;
    document.getElementById("miss_counter").innerHTML = missCounter;
    document.getElementById("hit_counter").innerHTML = hitCounter;
    document.getElementById("accuracy1").innerHTML = accuracy;
    document.getElementById("miss_counter1").innerHTML = missCounter;
    document.getElementById("hit_counter1").innerHTML = hitCounter;
    document.getElementById("hits_per_second1").innerHTML = hitsPerSecond;
}


function game_settings() {
    let modal = document.getElementById("game-set");
    let close = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    close.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

function easyModeStart(){
    gameMode = 1;
    maxTimer = 3 * 60;
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
}

function mediumModeStart(){
    gameMode = 2;
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
    maxTimer = 2 * 60;

}

function rankedModeStart(){
    gameMode = 3;
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
    maxTimer = 30;
}

function updateCountdown() {
    if (update === false) {
        if (gameMode === 1) {
            time = 3 * 60 - 1;
        } else if (gameMode === 2) {
            time = 2 * 60 - 1;
        } else {
            time = 30 - 1;
        }
        update = true;
    }
    const countDownEl = document.getElementById('aimtimer');
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds <10) {
        seconds = "0" + seconds;
    }
    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    stopInterval();
}

function stopInterval() {
    if (time === -1) {
        const countDownEl = document.getElementById('aimtimer');
        countDownEl.innerHTML ='GAME OVER';
        clearInterval(myInterval);
        endGame();
    } else if (time % 1 === 0) {
        let hitsPerSecond = hitCounter/(maxTimer - time);
        hitsPerSecond = hitsPerSecond.toFixed(2).toString() + "hit/s";
        document.getElementById("hits_per_second").innerHTML = hitsPerSecond;
    }
}

function startTimer() {
    if (clicked == true) {
    } else {
        myInterval = setInterval(updateCountdown, 1000);
        clicked = true;
    }
}

function endGame() {
    let modal = document.getElementById("end-game");
    modal.style.display = "block";
}

function playAgain() {
    hitCounter = -1;
    missCounter = 0;

    let modal = document.getElementById("end-game");
    let startButton = document.getElementById("btn");
    let buttonBoard = document.getElementsByClassName('board-button');
    startButton.classList.remove('target-button');
    console.log(buttonBoard[0]);
    buttonBoard[0].onclick = '';
    startButton.classList.add('target-button-start');
    startButton.classList.add('btn');
    startButton.classList.add('btn-success');
    startButton.style.backgroundColor = "#198754";
    startButton.style.border = "1px solid #198754";
    startButton.innerHTML = "Start game!";
    startButton.style.left = "40%";
    startButton.style.top = "50%";
    clicked = false;
    update = false;
    startButton.onclick = function() {
      startTimer();
      statistics(changePosition(), missCounter);
    }
    modal.style.display = "none";

}

function visualSettings() {
    let modal = document.getElementById("visuals");
    let close = document.getElementById("xclose");

    // When the user clicks the button, open the modal
    modal.style.display = "block";

    close.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}

function targetRed() {
    targetColor = 'red';
}

function targetBlue() {
    targetColor = 'blue';
}

function targetYellow() {
    targetColor = 'yellow';
}

function changeTargetColor() {
    let target = document.querySelector(".target-button");
    if (targetColor === 'red') {
        target.style.border = "1px solid red";
        target.style.backgroundColor = "red";
    } else if (targetColor === 'blue') {
        target.style.border = "1px solid royalblue";
        target.style.backgroundColor = "royalblue";
    } else {
        target.style.border = "1px solid gold";
        target.style.backgroundColor = "gold";
    }
}

function whiteBackground(){
    let board = document.getElementById("board-btn");
    board.style.backgroundImage = 'none'
    board.style.backgroundColor = "white";
}

function blackBackground(){
    let board = document.getElementById("board-btn");
    board.style.backgroundImage = 'none'
    board.style.backgroundColor = "black";

}

function shootingBackground(){
    let board = document.getElementById("board-btn");
    board.style.backgroundImage = 'url("https://www.cnnphilippines.com/.imaging/mte/demo-cnn-new/960/dam/cnn/2017/1/17/Sky-Range.jpg/jcr:content/Sky%20Range.jpg")';
    board.style.backgroundSize = "100%";
}
