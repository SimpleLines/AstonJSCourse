let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let millisec = document.getElementById('millisec');

const startWatch = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100 * i);
  }
};

startWatch();
