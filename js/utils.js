function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function convertNumToTime(num) {
  return num < 10 ? `0${num}` : num;
}
