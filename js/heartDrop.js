const screen = $("#screen");
let countHeart = 0;

class Heart {
  createHeartSVG(isImage) {
    const heart = document.createElement(isImage ? "img" : "div");
    heart.classList.add("heart");
    return heart;
  }

  buildAnimation() {
    const size = randomNumber(0, 0.5);
    const bg = COLORS[Math.floor(Math.random() * COLORS.length * 1.3)];
    const img = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    const left = Math.random() * 100;

    const delay = `${Math.random() * MAX_DELAY_ANIMATION}s`;
    const e = this.createHeartSVG(!bg);
    if (!bg) {
      e.setAttribute("src", img);
    } else {
      e.style.backgroundColor = bg;
    }

    e.style.transform = `scale(${size})`;
    e.style.left = `${left}%`;
    e.style.animationDelay = delay;
    e.classList.add(`heart-${Math.floor(Math.random() * MAX_CLASS + 1)}`);
    e.style.animationIterationCount = TIMES_REPEAR_DROP_HEARTS;

    return e;
  }

  render() {
    const e = this.buildAnimation();
    screen.append(e);
  }
}

const runHeartDrop = () => {
  if (countHeart >= COUNT_HEART) return;
  for (let i = 0; i <= COUNT_HEART; i++) {
    const heart = new Heart();
    heart.render();
    countHeart += 1;
  }
};
