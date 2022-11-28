let timer = document.querySelector('.timer');
let toggleBtn = document.querySelector('.toggle');
let resetBtn = document.querySelector('.reset');
let lapBtn = document.querySelector('.lap');
let lapBox = document.querySelector('.lapBox');

function Stopwatch(elem) {
  let time = 0;
  let offset;
  let interval;

  function lapOn() {
    let lap = lapBox.appendChild(document.createElement('li'));
    lap.innerHTML = elem.textContent;
    lap.classList = 'lapItem';
  }

  function lapOff() {
    return;
  }

  function update() {
    if (this.isOn) {
      time += delta();
    }
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;

    offset = now;

    return timePassed;
  }

  function timeFormatter(time) {
    time = new Date(time);

    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    while (milliseconds.length < 3) {milliseconds = '0' + milliseconds;}

    let result = `${minutes}:${seconds}:${milliseconds}`;

    return result;
  }

  this.start = function() {
    interval = setInterval(update.bind(this), 1);
    offset = Date.now();
    this.isOn = true;
  }

  this.stop = function() {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
  }

  this.reset = function() {
    time = 0;
    lapBox.innerHTML = '';
    interval = null;
    this.isOn = false;
    update();
  }

  this.lapOn = function() {
    lapOn();
  }

  this.lapOff = function() {
    lapOff();
  }

  this.isOn = false;
}

let watch = new Stopwatch(timer);

function start() {
  toggleBtn.textContent = 'Stop';
  toggleBtn.classList.toggle('on');
  watch.start();
}

function stop() {
  toggleBtn.textContent = 'Start';
  toggleBtn.classList.toggle('on');
  watch.stop();
}

function stopWhenOn() {
  toggleBtn.textContent = 'Start';
  toggleBtn.classList.toggle('on');
  watch.stop();
  watch.reset();
}

toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start();
})

resetBtn.addEventListener('click', function() {
    watch.isOn ? stopWhenOn() : watch.reset();
})

lapBtn.addEventListener('click', function() {
  watch.isOn ? watch.lapOn() : watch.lapOff();
})
