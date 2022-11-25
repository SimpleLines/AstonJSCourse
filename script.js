const hoursElement = document.querySelector('.hour');
const minutesElement = document.querySelector('.minute');
const secondsElement = document.querySelector('.second');
const millisecondsElement = document.querySelector('.millisecond');
const resultsElement = document.querySelector('.result');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const lapBtn = document.querySelector('.lap');

let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval = null;

const localMilliSec = localStorage.getItem('milliseconds');
const localSeconds = localStorage.getItem('seconds');
const localMinutes = localStorage.getItem('minutes');
const localHours = localStorage.getItem('hours');
const localResults = localStorage.getItem('results');

if (localResults) {
	resultsElement.innerHTML = JSON.parse(localResults);
}

if (localMilliSec) {
	milliseconds = +localMilliSec;
	seconds = +localSeconds;
	minutes = +localMinutes;
	hours = +localHours;
	millisecondsFunc();
	secondsFunc();
	minutesFunc();
	hoursFunc();
}

if (localResults) {
	resultsElement.innerHTML = JSON.parse(localResults);
}

startBtn.addEventListener('click', () => {
	clearInterval(interval);
	interval = setInterval(startTimer, 10);
});
pauseBtn.addEventListener('click', () => {
	clearInterval(interval);
});
stopBtn.addEventListener('click', () => {
	clearInterval(interval);
	clearFields();
	resultsElement.innerHTML = '';
	localStorage.clear();
});
lapBtn.addEventListener('click', () => {
	lapFunc();
});

function startTimer() {
	milliseconds++;
	millisecondsFunc();
	secondsFunc();
	minutesFunc();
	hoursFunc();
	localStorage.setItem('milliseconds', milliseconds);
	localStorage.setItem('seconds', seconds);
	localStorage.setItem('minutes', minutes);
	localStorage.setItem('hours', hours);
}

function clearFields() {
	hours = 00;
	minutes = 00;
	seconds = 00;
	milliseconds = 00;
	hoursElement.textContent = '00';
	secondsElement.textContent = '00';
	minutesElement.textContent = '00';
	millisecondsElement.textContent = '00';
}

function millisecondsFunc() {
	if (milliseconds < 9) {
		millisecondsElement.textContent = '0' + milliseconds;
	}
	if (milliseconds > 9) {
		millisecondsElement.textContent = milliseconds;
	}
	if (milliseconds > 99) {
		seconds++;
		secondsElement.textContent = '0' + seconds;
		milliseconds = 0;
		millisecondsElement.textContent = '0' + milliseconds;
	}
}

function secondsFunc() {
	if (seconds < 9) {
		secondsElement.textContent = '0' + seconds;
	}
	if (seconds > 9) {
		secondsElement.textContent = seconds;
	}
	if (seconds > 59) {
		minutes++;
		minutesElement.textContent = '0' + minutes;
		seconds = 0;
		secondsElement.textContent = '0' + seconds;
	}
}

function minutesFunc() {
	if (minutes < 9) {
		minutesElement.textContent = '0' + minutes;
	}
	if (minutes > 9) {
		minutesElement.textContent = minutes;
	}
	if (minutes > 59) {
		hours++;
		hoursElement.textContent = '0' + hours;
		minutes = 0;
		minutesElement.textContent = '0' + minutes;
	}
}

function hoursFunc() {
	if (hours < 9) {
		hoursElement.textContent = '0' + hours;
	}
	if (hours > 9) {
		hoursElement.textContent = hours;
	}
	if (hours == 24) {
		millisecondsElement.textContent = 00;
		secondsElement.textContent = 00;
		minutesElement.textContent = 00;
		hoursElement.textContent = 00;
	}
}

function lapFunc() {
	const block = document.createElement('div');
	block.textContent = `Result: ${hours < 9 ? '0' + hours : hours}:${
		minutes < 9 ? '0' + minutes : minutes
	}:${seconds < 9 ? '0' + seconds : seconds}:${
		milliseconds < 9 ? '0' + milliseconds : milliseconds
	}`;
	resultsElement.append(block);
	localStorage.setItem(
		'results',
		JSON.stringify(resultsElement.innerHTML)
	);
}
