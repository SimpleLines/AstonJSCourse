'use strict';

const time = document.querySelector('.time');
const lapTime = document.querySelector('.lap-time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const lapBtn = document.getElementById('lap');
const resetBtn = document.getElementById('reset');
const lapDiv = document.querySelector('.lap');
const laps = document.querySelector('.laps');

const date = document.querySelector('.date');
const now = new Date();
const locale = navigator.language;
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

let seconds = 0;
let interval = null;

let lapSeconds = 0;
let lapInterval = null;
let lapCount = 1;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

date.textContent = new Intl.DateTimeFormat(locale, options).format(now);

function timer() {
  seconds++;

  let hours = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hours * 3600) / 60);
  let secs = seconds % 60;

  time.innerText = `${addZero(hours)}:${addZero(mins)}:${addZero(secs)}`;
}

function lapTimer() {
  lapSeconds++;
  let hours = Math.floor(lapSeconds / 3600);
  let mins = Math.floor((lapSeconds - hours * 3600) / 60);
  let secs = lapSeconds % 60;

  lapTime.innerText = `${addZero(hours)}:${addZero(mins)}:${addZero(secs)}`;
}

function addZero(time) {
  return String(time).padStart(2, 0);
}

function start() {
  if (interval) {
    return;
  }
  time.style.color = '#4a413d';
  interval = setInterval(timer, 1000);
  if (!(lapTime.innerText === '00:00:00')) {
    startLap();
  }
}

function startLap() {
  if (lapInterval) {
    return;
  }
  lapInterval = setInterval(lapTimer, 1000);
}

function stop() {
  time.style.color = '#938883';
  clearInterval(interval);
  interval = null;
  clearInterval(lapInterval);
  lapInterval = null;
}

function reset() {
  stop();
  seconds = 0;
  time.innerText = '00:00:00';
  lapTime.innerText = '00:00:00';
  laps.innerText = '';
  lapCount = 0;
  laps.style.opacity = '0';
  lapTime.style.opacity = '0';
}

function lap() {
  if (!interval) {
    return;
  }
  lapSeconds = 0;
  startLap();

  laps.style.opacity = '1';
  lapTime.style.opacity = '1';

  const lapElement = document.createElement('div');
  lapElement.classList.add('lap');
  lapElement.innerText = `#${addZero(lapCount)} ` + time.innerText;
  const newDiv = document.createElement('div');
  lapElement.appendChild(newDiv);
  newDiv.setAttribute('id', 'curLapTime');
  newDiv.innerHTML = `<span class ="lap-time-text">LAP TIME</span> ${lapTime.innerText}`;

  lapCount++;
  laps.prepend(lapElement);
}
