initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}

function changePosition() {
    let btn = document.getElementById('btn');
    btn.style.top = Math.floor((Math.random() * 750) + 1) + "px";
    btn.style.left = Math.floor((Math.random() * 900) + 1) + "px";
}

