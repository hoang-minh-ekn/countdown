let time = null;
let distance = null;
const startTime = new Date("2022/11/01").getTime();
const endTime = new Date("2022/11/26").getTime();
let finish = false;

const daysE = $("#days");
const hoursE = $("#hours");
const minutesE = $("#minutes");
const secondsE = $("#seconds");
const countdown = $("#countdown");
const countdownBlockE = $("#countdown-block");
const waves = $("#waves");

const runCountdown = () => {
  time = setInterval(() => {
    const now = new Date().getTime();
    distance = endTime - now;
    if (finish == true) {
      clearInterval(time);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysE.innerHTML = convertNumToTime(days);
    hoursE.innerHTML = convertNumToTime(hours);
    minutesE.innerHTML = convertNumToTime(minutes);
    secondsE.innerHTML = convertNumToTime(seconds);

    runProgress();
  }, [1000]);
};

const createHeartFly = () => {
  const bg =
    COLORS_HEART_FLY[Math.floor(Math.random() * COLORS_HEART_FLY.length)];
  const left = Math.floor(Math.random() * 101);
  const delay = Math.random() * 5;
  const heart = document.createElement("span");

  heart.classList.add("countdown-heart");
  heart.style.backgroundColor = bg;
  heart.style.left = `${left}%`;
  heart.style.animationDelay = `${delay}s`;
  return heart;
};

const runHeartFly = () => {
  for (let i = 0; i <= 10; i++) {
    const heart = createHeartFly();
    countdown.after(heart);
  }
};

const runProgress = () => {
  const totaltime = endTime - startTime;
  const progress = 100 - (distance * 100) / totaltime;
  waves.style.height = (150 * progress) / 100 + "%";
};

const runFinishCountdown = () => {
  countdownBlockE.classList.add("hide");
  setTimeout(() => {
    runHeartDrop();
  }, 2500);
};

runCountdown();
runHeartFly();
