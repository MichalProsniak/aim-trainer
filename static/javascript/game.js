initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
var startingMinutes = 5;
var time = startingMinutes * 60 - 1;
let start = false
let hitCounter=-1;
var gameMode = 2
var maxTimer = 2*60;
function changePosition() {

    let btn = document.getElementById('btn');

    btn.innerHTML = "";
    btn.classList.add('target-button');
    btn.classList.remove('target-button-start');
    btn.style.top = Math.floor((Math.random() * 750) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 900) + 1) + "px";
    btn.classList.remove('target-button');
    window.requestAnimationFrame(function (){
        btn.classList.add('target-button');
    });
    hitCounter +=1;
    return hitCounter

}


function onloadbutton() {
    let btn = document.getElementById('btn');
    btn.innerHTML = "Start game!"
}

let missCounter=0;
function countMiss(){
    missCounter+=1;
    return missCounter
}


function statistics(hitCounter, missCounter) {
    let shootCounter=hitCounter+missCounter;
    let accuracy = hitCounter/shootCounter * 100;
    accuracy = accuracy.toFixed(2).toString() + "%";
    let hitsPerSecond = hitCounter/(maxTimer - time);
    hitsPerSecond = hitsPerSecond.toFixed(2).toString() + "hit/s"
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("miss_counter").innerHTML = missCounter;
    document.getElementById("hits_per_second").innerHTML = hitsPerSecond;
    document.getElementById("hit_counter").innerHTML = hitCounter;
}


function game_settings() {
    let modal = document.getElementById("game-set");
    let close = document.getElementsByClassName("close")[0];

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

function easyModeStart(){
    gameMode = 1
    maxTimer = 3 * 60
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
}

function mediumModeStart(){
    gameMode = 2
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
    maxTimer = 2 * 60

}

function rankedModeStart(){
    gameMode = 3
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
    maxTimer = 60
}


let update = false
function updateCountdown() {
    if (update === false) {
        if (gameMode === 1) {
            time = 3 * 60
        } else if (gameMode === 2) {
            time = 2 * 60
        } else {
            time = 1
        }
        update = true
    }
    const countDownEl = document.getElementById('aimtimer');
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds <10) {
        seconds = "0" + seconds
    }
    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    stopInterval()



}

function stopInterval() {
    let clInterval = false
    if (time === -1) {
        const countDownEl = document.getElementById('aimtimer');
        countDownEl.innerHTML ='GAME OVER';
        clearInterval(myInterval)
        endGame()
    } else if (time % 1 === 0) {
        let hitsPerSecond = hitCounter/(maxTimer - time);
        hitsPerSecond = hitsPerSecond.toFixed(2).toString() + "hit/s"
        document.getElementById("hits_per_second").innerHTML = hitsPerSecond;

    }
}

var myInterval;
let clicked = false


function startTimer() {
    if (clicked == true) {
    } else {
        myInterval = setInterval(updateCountdown, 1000)
        clicked = true

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
    let close = document.getElementById("play-again")
    let startButton = document.getElementById("btn");
    startButton.classList.remove('target-button');
    startButton.classList.add('target-button-start');
    startButton.innerHTML = "Start game!"
    startButton.style.left = "40%"
    startButton.style.top = "50%"
    clicked = false;
    update = false;
    startButton.onclick = function() {
      startTimer();
      statistics(changePosition(), missCounter)
    }
    modal.style.display = "none";

}
