let startTime;
let running = false;
let laps = [];
let lapcount = 1;
let interval;

document.getElementById('btn-start').addEventListener('click', startStopwatch);
document.getElementById('btn-stop').addEventListener('click', stopStopwatch);
document.getElementById('btn-reset').addEventListener('click', resetStopwatch);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateStopwatchDisplay();
    }, 1000);
}

function resetStopwatch() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    document.getElementById('hours').innerText = padZero(hours);
    document.getElementById('minutes').innerText = padZero(minutes);
    document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(time) {
    return (time < 10) ? '0' + time : time;
}