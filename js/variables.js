const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const IMAGES = [
  "./images/h1.jpeg",
  "./images/h2.jpeg",
  "./images/h3.jpeg",
  "./images/h4.jpeg",
  "./images/h5.jpeg",
];

const IMAGES_SLIDE = [
  "./images/h6.jpeg",
  "./images/h2.jpeg",
  "./images/h3.jpeg",
  "./images/h4.jpeg",
  "./images/h5.jpeg",
];
const COLORS = [
  "#FFADBC",
  "#D989B5",
  "#DC3535",
  "#E97777",
  "#FF9F9F",
  "#FCDDB0",
];

const COLORS_HEART_FLY = ["#E97777", "#FF9F9F", "#FCDDB0", "#FF8DC7"];

const MAX_DELAY_ANIMATION = 3; // seconds
const TIMES_REPEAR_DROP_HEARTS = 2; // times
const MAX_CLASS = 5; // class to style heart
const COUNT_HEART = 200;
const MAX_SCALE = 1; //250px
const initHearts = [];
const targetFinish = new Date(2022, 11, 26, 0, 0, 0).getTime();
