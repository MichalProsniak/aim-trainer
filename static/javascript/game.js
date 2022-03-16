initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
let start = false
let hitCounter=0;
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

function incrementValue(a) {
    return a++
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
    let easyMode = document.getElementById("easy-mode");
    let mediumMode = document.getElementById("medium-mode");
    let rankedMode = document.getElementById("ranked-mode");

    // When the user clicks the button, open the modal
    gameSetBtn.onclick = function() {
      modal.style.display = "block";
    }

    easyMode.onclick = function() {
      modal.style.display = "none";
    }

    mediumMode.onclick = function() {
      modal.style.display = "none";
    }

    rankedMode.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}