const startingMinutes = 10;
let time = startingMinutes * 60 - 1;

function updateCountdown() {
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


function getBill(user, sales) {
    if (!clicked) {
        clicked = true;
        window.alert('Your bill is on the way.');
        //do the billing process
    }
}