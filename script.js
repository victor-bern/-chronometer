const hours = document.querySelector('[data-time="hours"]');
const minutes = document.querySelector('[data-time="minutes"]');
const seconds = document.querySelector('[data-time="seconds"]');

const btnStart = document.querySelector('[data-btn="start"]');
const btnPause = document.querySelector('[data-btn="pause"]');
const btnReset = document.querySelector('[data-btn="reset"]');
let timer;
let secondTime = 1;
let hourTime = 0;
let minutesTime = 0;

function startCron() {
  timer = setInterval(() => {
    if (secondTime == 60) {
      minutesTime++;
      secondTime = 0;
    } else if (minutesTime == 60) {
      hourTime++;
      secondTime = 0;
      minutesTime = 0;
    }
    if (secondTime < 10) {
      seconds.innerHTML = "0" + secondTime;
    } else {
      seconds.innerHTML = secondTime;
    }
    if (minutesTime < 10) {
      minutes.innerHTML = "0" + minutesTime;
    } else {
      minutes.innerHTML = minutesTime;
    }
    if (hourTime < 10) {
      hours.innerHTML = "0" + hourTime;
    } else {
      hours.innerHTML = hourTime;
    }
    secondTime++;
  }, 17);

  btnStart.setAttribute("disabled", "");
}
function pauseCron() {
  clearInterval(timer);
  btnStart.removeAttribute("disabled");
}

function resetCron() {
  pauseCron();
  hours.innerText = "0" + 0;
  minutes.innerText = "0" + 0;
  seconds.innerText = "0" + 0;
  i = 0;
  minutesTime = 0;
}

btnStart.addEventListener("click", startCron);
btnPause.addEventListener("click", pauseCron);
btnReset.addEventListener("click", resetCron);
