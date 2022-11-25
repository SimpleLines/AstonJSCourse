let partSec = 0;
let goTime;
let onCkickStart = 0;

let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ms = document.getElementById('millisec');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const circleButton = document.getElementById('circle');
const wrapperCircle = document.getElementById('wrapper__circle');

const plusTime = (time) => {
  time.textContent < 9
    ? (time.textContent = '0' + (+time.textContent + 1))
    : (time.textContent = +time.textContent + 1);
};

const startWatch = () => {
  partSec++;
  ms.textContent = partSec;
  if (partSec === 9) {
    plusTime(sec, partSec);
    if (sec.textContent == 60) {
      sec.textContent = '00';
      plusTime(min);
      if (min.textContent == 60) {
        min.textContent = '00';
        plusTime(hour);
      }
    }
    partSec = 0;
  }
};

startButton.addEventListener('click', () => {
  circleButton.removeAttribute('disabled');
  if (onCkickStart > 0) startButton.textContent = 'Продолжить';

  if (onCkickStart % 2) {
    clearInterval(goTime);
    onCkickStart += 1;
  } else {
    goTime = setInterval(startWatch, 100);
    startButton.textContent = 'Пауза';
    onCkickStart += 1;
  }
});

resetButton.addEventListener('click', () => {
  // circleButton.setAttribute('disabled');
  clearInterval(goTime);
  ms.textContent = '0';
  sec.textContent = '00';
  min.textContent = '00';
  hour.textContent = '00';
  startButton.textContent = 'Старт';
  onCkickStart = 0;

  while (wrapperCircle.firstChild) {
    wrapperCircle.removeChild(wrapperCircle.firstChild);
  }
});

circleButton.addEventListener('click', () => {
  const circleInfo = document.createElement('li');
  circleInfo.textContent = `${hour.textContent}:${min.textContent}:${sec.textContent}.${ms.textContent}`;
  wrapperCircle.append(circleInfo);
});
