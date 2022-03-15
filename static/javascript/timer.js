const startingMinutes = 10;
let time = startingMinutes * 60 - 1;

function updateCountdown() {
    const countDownEl = document.getElementById('aimtimer');
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    console.log(time)
    time--;

}

function startTimer() {
    setInterval(updateCountdown, 1000)
}


