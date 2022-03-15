initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

function changePosition() {
    let btn = document.getElementById('btn');
    btn.style.top = Math.floor((Math.random() * 750) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 900) + 1) + "px";
}

function statistics(hitCounter, shootCounter, maxTimer, userName) {
    let accuracy = hitCounter/shootCounter * 100;
    accuracy = accuracy.toString() + "%";
    let missCounter = shootCounter - hitCounter;
    let hitsPerSecond = hitCounter/maxTimer;
    hitsPerSecond = hitsPerSecond.toString() + "hit/s"
    document.getElementById("accuracy").innerHTML = accuracy;
    document.getElementById("miss_counter").innerHTML = missCounter;
    document.getElementById("hits_per_second").innerHTML = hitsPerSecond;
    document.getElementById("hit_counter").innerHTML = hitCounter;
    document.getElementById("user_name").innerHTML = userName;
}