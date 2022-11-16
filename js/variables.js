const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const IMAGES = [
  "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/310188729_3435310523392964_5351930229725023927_n.jpg?stp=dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=CqMK8kR3638AX-lbFXJ&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfASuoNAGenegLpx3M0FaCWjWRnwzG4N3qs6TpafdrQAHw&oe=637784A2",
  "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/291467679_3362288100695207_3405222211310703681_n.jpg?stp=cp6_dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=TsALPchFJEUAX8exXXJ&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAhfz5EhQ-9CrjjR7MZimuMo6KRotmJ9uQzucpCpHn0vQ&oe=6378D8A0",
  "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/314973253_3470166696574013_1302763052415126005_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oQY1LaV8s7MAX-yWKmO&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBxgSA4w2BLNeO7iaBZwAWwos_QNwcrutA2Qg5nVz0Kkg&oe=63777767",
  "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/235764482_3107940086130011_3667391856805482214_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=gk8IfmbCtJQAX-DNyvV&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAkxr4Bd0MJk-UxsrpVzVsTArz3oCg2DzNZasNYG2XaLQ&oe=63776E62",
  "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/278920589_3308776862712998_5160324107422310023_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=ndh7U0eXnFgAX-YYqLW&tn=Nue7yjsgedZZuiN0&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAXhQ_TaNRNs9XpXztV8ofOGYukJQUIavWwLVQ4y2_Vug&oe=63779339",
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
const MAX_CLASS = 5; // class to style heart
const COUNT_HEART = 200;
const MAX_SCALE = 1; //250px
const initHearts = [];
const targetFinish = new Date(2022, 11, 26, 0, 0, 0).getTime();
