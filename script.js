'use strict';
// controls === buttons
const time = document.querySelector('.time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const lapBtn = document.getElementById('lap');
const resetBtn = document.getElementById('reset');
const lapDiv = document.querySelector('.lap');
const lapsContainer = document.querySelector('.laps');

let seconds = 0;
let interval = null;
let count = 1;

// Event listeneres
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

// Update the timer
function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  time.innerText = `${addZero(hours)}:${addZero(mins)}:${addZero(secs)}`;
}

function addZero(time) {
  return String(time).padStart(2, 0);
}

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time.innerText = '00:00:00';
  lapsContainer.innerText = '';
}

function lap() {
  const lap = document.createElement('div');
  lap.classList.add('lap');
  lap.innerText = `#${count}: ` + time.innerText;
  count++;
  lapDiv.insertAdjacentElement('afterend', lap);
}
