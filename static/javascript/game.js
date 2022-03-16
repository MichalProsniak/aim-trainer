initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
var startingMinutes = 5;
var time = startingMinutes * 60 - 1;
let start = false
let hitCounter=0;
var gameMode = 2
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


function statistics(hitCounter, missCounter, maxTimer, userName) {
    let shootCounter=hitCounter+missCounter;
    let accuracy = hitCounter/shootCounter * 100;
    accuracy = accuracy.toString() + "%";
    let hitsPerSecond = hitCounter/maxTimer;
    hitsPerSecond = hitsPerSecond.toString() + "hit/s"
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("miss_counter").innerHTML = missCounter;
    document.getElementById("hits_per_second").innerHTML = hitsPerSecond;
    document.getElementById("hit_counter").innerHTML = hitCounter;
    document.getElementById("user_name").innerHTML = userName;
}


function game_settings() {
    let modal = document.getElementById("game-set");
    let gameSetBtn = document.getElementById("game-settings-button");
    let close = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    gameSetBtn.onclick = function() {
      modal.style.display = "block";
    }
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
    let modal = document.getElementById("game-set");
    modal.style.display = "none";

}

function mediumModeStart(){
    gameMode = 2
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
}

function rankedModeStart(){
    gameMode = 3
    let modal = document.getElementById("game-set");
    modal.style.display = "none";
}


let xxx = false
function updateCountdown() {
    if (xxx === false) {
        if (gameMode === 1) {
            time = 3 * 60
        } else if (gameMode === 2) {
            time = 2 * 60
        } else {
            time = 1 * 60
        }
        xxx = true
    }
    const countDownEl = document.getElementById('aimtimer');
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds <10) {
        seconds = "0" + seconds
    }
    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

}
let clicked = false
function startTimer() {
    if (clicked == true) {
    } else {
        setInterval(updateCountdown, 1000)
        clicked = true
    }

}
