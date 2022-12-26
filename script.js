// declared variables
const timer = document.querySelector('.stopwatchComponents .timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let timePassed = 0;
let interval = null;

// connected buttons to stopwatch display
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);


// made stopwatch display functional
function stopwatchDisplay() {
    timePassed++;

    // formatted stopwatch display
    let hours = Math.floor(timePassed / (60 * 60));
    let minutes = Math.floor((timePassed - (hours * (60 * 60))) / 60);
    let seconds = timePassed % 60;

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    timer.innerText = `${hours}:${minutes}:${seconds}`;
}

// made start button functional
function start() {
    if (interval) {
        return 
    }

    interval = setInterval(stopwatchDisplay, 1000);
}

// made stop button functional
function stop() {
    clearInterval(interval);
    interval = null;
}