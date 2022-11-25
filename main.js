// INIT //
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let [millisecondsLap, secondsLap, minutesLap, hoursLap] = [0, 0, 0, 0];
let int = null;
let intLap = null;
let i = 1;
let currentTimerValue;

// SELECTORS //
let timerValue = document.querySelector('.display');
let timerLapValue = document.querySelector('.display2');
let startButton = document.getElementById('startTimer');
let pauseButton = document.getElementById('pauseTimer');
let resetButton = document.getElementById('resetTimer');
let lapButton = document.getElementById('lapTimer');

// FUNCTIONS //
const removeDisabledAttribute = () => {
  if (lapButton.disabled) {
    lapButton.removeAttribute('disabled');
    lapButton.style.opacity = 1;
  }
};

const createTable = () => {
  document.querySelector('.prepend').innerHTML += `
    <tr>
      <td>#${i}</td>
      <td>${
        intLap === null
          ? timerValue.innerHTML.replace(/\s+/g, '')
          : timerLapValue.innerHTML.replace(/\s+/g, '')
      }</td>
      <td>${timerValue.innerHTML.replace(/\s+/g, '')}</td>
    </tr>
    `;

  i++;
};

const start = () => {
  removeDisabledAttribute();

  if (int !== null) {
    clearInterval(int);
  }

  if (intLap !== null) {
    clearInterval(intLap);
    intLap = setInterval(displayLapTimer, 10);
  }

  int = setInterval(displayTimer, 10);
};

const pause = () => {
  if (int !== null) {
    lapButton.setAttribute('disabled', '');
    lapButton.style.opacity = 0.5;
  }

  clearInterval(int);
  clearInterval(intLap);
};

const reset = () => {
  clearInterval(int);
  clearInterval(intLap);

  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  [millisecondsLap, secondsLap, minutesLap, hoursLap] = [0, 0, 0, 0];
  timerValue.innerHTML = '00 : 00 : 00 : 000 ';
  timerLapValue.innerHTML = '00 : 00 : 00 : 000 ';
  int = null;
  intLap = null;

  removeDisabledAttribute();

  document.querySelector('.prepend').innerHTML = '';
  i = 1;

  setTimeout(() => {
    localStorage.clear();
  }, 100);
};

const lap = () => {
  if (intLap !== null) {
    clearInterval(intLap);
    [millisecondsLap, secondsLap, minutesLap, hoursLap] = [0, 0, 0, 0];
  }

  if (int !== null) {
    createTable();
    intLap = setInterval(displayLapTimer, 10);
  }
};

const clickListener = (button, func) => {
  button.addEventListener('click', func);
};

const getTimerValue = () => {
  if (localStorage.getItem('currentTimerValue')) {
    currentTimerValue = localStorage
      .getItem('currentTimerValue')
      .replace(/\s+/g, '')
      .split(':')
      .map((el) => +el)
      .reverse();

    [milliseconds, seconds, minutes, hours] = currentTimerValue;
    int = setInterval(displayTimer, 10);
  }
};

// APP //
window.addEventListener('DOMContentLoaded', getTimerValue);

clickListener(startButton, start);
clickListener(pauseButton, pause);
clickListener(resetButton, reset);
clickListener(lapButton, lap);

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;

  timerValue.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function displayLapTimer() {
  millisecondsLap += 10;
  if (millisecondsLap == 1000) {
    millisecondsLap = 0;
    secondsLap++;
    if (secondsLap == 60) {
      secondsLap = 0;
      minutesLap++;
      if (minutesLap == 60) {
        minutesLap = 0;
        hoursLap++;
      }
    }
  }

  let h = hoursLap < 10 ? '0' + hoursLap : hoursLap;
  let m = minutesLap < 10 ? '0' + minutesLap : minutesLap;
  let s = secondsLap < 10 ? '0' + secondsLap : secondsLap;
  let ms =
    millisecondsLap < 10
      ? '00' + millisecondsLap
      : millisecondsLap < 100
      ? '0' + millisecondsLap
      : millisecondsLap;

  timerLapValue.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// CHANGE DOCUMENT TITLE AND LOCALSTORAGE //
const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      document.title = timerValue.innerHTML.replace(/\s+/g, '').slice(0, 8);
      localStorage.setItem('currentTimerValue', timerValue.innerHTML);
    }
    return;
  }
};

const observer = new MutationObserver(callback);

observer.observe(timerValue, config);

