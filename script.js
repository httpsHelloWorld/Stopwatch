const timer = document.querySelector('.stopwatchComponents .timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let timePassed = 0;
let interval = null;